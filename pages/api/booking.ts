import emailConfig from "@/config/email.config";
import mg from "@/lib/SendEmail";

export default function handler(req: Request, res: any) {
  const body = req.body as any;

  return mg.messages
    .create(emailConfig.domain as string, {
      from: `Excited Main <${emailConfig.email}>`,
      to: [`${emailConfig.email_to}`],
      subject: "Booking request",
      html: `
    <h1 style="margin-bottom: 10px;" >New request - Booking</h1>

    <p style="margin-bottom: 10px;" >Travel Date: ${
      body.travelDate
    }, Flight Number: ${body.flightNumber}, Point Of Service: ${
        body.pointOfService
      }</p>
      
    <h3 style="margin-bottom: 10px;" >Passengers</h3>
    ${body.passengers.map(
      (value: any) =>
        `- Name: ${value.firstName} ${value.lastName}, Record Locator: ${
          value?.recordLocator || "no Record Locator"
        }`
    )}

    <h3 style="margin-bottom: 10px;" >Emergency Contact</h3>
    <p> Name ${body.emergencyContact.firstName} ${
        body.emergencyContact.lastName
      }, phone ${body.emergencyContact.phoneNumber} </p>

    <h3 style="margin-bottom: 10px;">Requestor</h3>
    <p>  ${body.requestor.firstName} ${body.requestor.lastName}, phone ${
        body.requestor.phoneNumber
      }, email ${body.requestor.email}</p>
    
      ${
        body?.carService &&
        `Car Service: company ${body.carService.company}, phone ${body.carService.phoneNumber}, reservation ${body.carService.reservation}`
      }
  `,
    })
    .then(() =>
      res.status(200).json({ statusCode: 400, message: "Send email success" })
    )
    .catch(() => res.status(400).json({ statusCode: 500, message: "error" }));
}
// '<p style="margin-bottom: 10px;" ><strong>Name:</strong> ${form.first_name} ${form.last_name}</p>
// <p style="margin-bottom: 10px;" ><strong>Email:</strong> ${form.email}</p>
// <p style="margin-bottom: 10px;" ><strong>Detail:</strong> ${form.detail}</p>'
