export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    const {
      productName,
      productType,
      targetMarket,
      dailyBudget,
      mainBenefits,
      painPoints,
    } = req.body;

    if (!productName || !targetMarket) {
      return res.status(400).json({
        error: "productName y targetMarket son obligatorios.",
      });
    }

    const baseAngle =
      "Independencia energética y protección en emergencias para Puerto Rico";

    const metaCampaign = {
      platform: "meta",
      campaignName: `${productName} - PR - Conversión`,
      objective: "Sales",
      dailyBudget,
      angle: baseAngle,
      adSets: [
        {
          name: "PR - Homeowners - Backup",
          targeting: {
            locations: [targetMarket],
            interests: ["energía solar", "generadores", "huracanes", "apagones"],
          },
          ads: [
            {
              name: `${productName} - Anuncio 1`,
              primaryText: `Cuando se va la luz, no puedes depender de la suerte. ${productName} te da respaldo real para tu hogar en Puerto Rico.`,
              headline: `Protege tu hogar con ${productName}`,
              description:
                mainBenefits ||
                "Energía de respaldo, protección para tu familia y financiamiento disponible.",
              callToAction: "Shop Now",
            },
          ],
        },
      ],
    };

    const googleCampaign = {
      platform: "google",
      campaignName: `${productName} - PR - Search`,
      objective: "Sales",
      dailyBudget,
      keywords: [
        `${productName}`,
        `${productType || "power station"} Puerto Rico`,
        "generador solar Puerto Rico",
        "backup energía huracanes",
      ],
      ads: [
        {
          headline1: `${productName} en Puerto Rico`,
          headline2: "Energía de respaldo para huracanes",
          headline3: "Financiamiento disponible",
          description1:
            painPoints ||
            "Evita perder comida, medicamentos y comodidad cuando se va la luz.",
          description2:
            "Compra en Green Power Tech Store. Plan de protección y opciones de pago flexibles.",
        },
      ],
    };

    return res.status(200).json({
      metaCampaign,
      googleCampaign,
    });
  } catch (error) {
    console.error("Error en /api/campaigns/generate:", error);
    return res.status(500).json({ error: "Error interno generando campaña." });
  }
}

