
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailRequest {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  projectDescription?: string;
  attachments?: Array<{
    fileName: string;
    fileSize: number;
    fileType: string;
    fileUrl: string;
  }>;
  source: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      fullName,
      email,
      phone,
      company,
      projectDescription,
      attachments,
      source
    }: QuoteEmailRequest = await req.json();

    // Criar lista de anexos para o email
    let attachmentsList = "";
    if (attachments && attachments.length > 0) {
      attachmentsList = `
        <h3>Arquivos Anexados:</h3>
        <ul>
          ${attachments.map(file => `
            <li>
              <strong>${file.fileName}</strong> 
              (${(file.fileSize / 1024 / 1024).toFixed(2)} MB, ${file.fileType})
            </li>
          `).join('')}
        </ul>
      `;
    } else {
      attachmentsList = "<p><em>Nenhum arquivo anexado</em></p>";
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
          Nova Solicitação de Orçamento - JPD Usinagem
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Dados do Solicitante:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 30%;">Nome:</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Telefone:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Empresa:</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Origem:</td>
              <td style="padding: 8px 0;">${source}</td>
            </tr>
          </table>
        </div>

        ${projectDescription ? `
        <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Descrição do Projeto:</h3>
          <p style="line-height: 1.6; color: #555;">${projectDescription}</p>
        </div>
        ` : ''}

        <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
          ${attachmentsList}
        </div>

        <div style="background: #dc2626; color: white; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; font-weight: bold;">⏰ Lembrete: Responder em até 24 horas</p>
        </div>

        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="color: #666; font-size: 14px; margin: 0;">
          Este email foi gerado automaticamente pelo sistema de orçamentos da JPD Usinagem.
        </p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: "JPD Usinagem <comercial@jpdusinagem.com.br>",
      to: ["comercial@jpdusinagem.com.br"],
      subject: `Nova Solicitação de Orçamento - ${fullName}`,
      html: emailHtml,
    });

    console.log("Email de orçamento enviado com sucesso:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });

  } catch (error: any) {
    console.error("Erro ao enviar email de orçamento:", error);
    return new Response(
      JSON.stringify({ 
        error: "Erro ao enviar email", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
