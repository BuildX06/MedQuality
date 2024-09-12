const drugInfoDiv = document.getElementById('drug-info');
const drugNameElement = document.getElementById('drug-name');
const drugImageElement = document.getElementById('drug-image');
const drugCompositionElement = document.getElementById('drug-composition');
const drugSellerElement = document.getElementById('drug-seller');
const drugQualityElement = document.getElementById('drug-quality');
const drugQualityPercentageElement = document.getElementById('drug-quality-percentage');
const genericDrugsDiv = document.getElementById('generic-drugs');
const genericDrugInfoDiv = document.getElementById('generic-drug-info');

const drugName = new URLSearchParams(window.location.search).get('drug');

// Create an object to store the drug information
const drugData = {
    "Amoxicillin": {
      "mainDrug": {
        "name": "Amoxicillin",
        "image": "images/amoxicillin.jpg",
        "composition": "Amoxicillin trihydrate",
        "seller": "Various sellers",
        "quality": "FDA-approved",
        "qualityPercentage": {
            "good": "85.71",
            "bad": "0.00",
            "average": "14.29"
          }
      },
      "genericDrugs": [
        {
            "name": "Cefdinir",
            "image": "images/cefdinir.jpg",
            "composition": "Cefdinir",
            "seller ": "Teva Pharmaceuticals",
            "quality": "FDA-approved",
            "qualityPercentage": "98.5%"
          },
          {
            "name": "Doxycycline",
            "image": "images/doxycycline.jpg",
            "composition": "Doxycycline hyclate",
            "seller": "Teva Pharmaceuticals",
            "quality": "FDA-approved",
            "qualityPercentage": "98.5%"
          },
        {
          "name": "Cefaclor",
          "image": "images/cefaclor.jpg",
          "composition": "Cefaclor monohydrate",
          "seller": "Lupin Pharmaceuticals",
          "quality": "FDA-approved",
          "qualityPercentage": "97.5%"
        },
        {
          "name": "Cephalexin",
          "image": "images/cephalexin.jpg",
          "composition": "Cephalexin monohydrate",
          "seller": "Teva Pharmaceuticals",
          "quality": "FDA-approved",
          "qualityPercentage": "97.2%"
        },
        // Add more generic drugs for Amoxicillin
      ]
    },
    "Paracetamol": {
      "mainDrug": {
        "name": "Paracetamol",
        "image": "images/drug1.jpg",
        "composition": "Paracetamol",
        "seller": "Various sellers",
        "quality": "FDA-approved",
        "qualityPercentage": {
            "good": "85.71",
            "bad": "0.00",
            "average": "14.29"
          }
        },
      "genericDrugs": [
        {
          "name": "Acetaminophen",
          "image": "images/acetaminophen.jpg",
          "composition": "Paracetamol",
          "seller": "Johnson & Johnson",
          "quality": "FDA-approved",
          "qualityPercentage": "99.5%"
        },
        {
          "name": "Oxycodone",
          "image": "images/oxycodone.jpg",
          "composition": "Oxycodone",
          "seller": "Pfizer",
          "quality": "FDA-approved",
          "qualityPercentage": "97.2%"
        },
        {
          "name": "Diclofenac",
          "image": "images/diclofenac.jpg",
          "composition": "Diclofenac sodium",
          "seller": "Novartis Pharmaceuticals",
          "quality": "FDA-approved",
          "qualityPercentage": "98.5%"
        },
        {
          "name": "Naproxen",
          "image": "images/naproxen.jpg",
          "composition": "Naproxen sodium",
          "seller": "Roche Pharmaceuticals",
          "quality": "FDA-approved",
          "qualityPercentage": "98.2%"
        },
        // Add more generic drugs for Paracetamol
      ]
    },
    "Metformin": {
      "mainDrug": {
        "name": "Metformin",
        "image": "images/drug4.png",
        "composition": "Metformin hydrochloride",
        "seller": "Various sellers",
        "quality": "FDA-approved",
       "qualityPercentage": {
      "good": "50.00",
      "bad": "0.00",
      "average": "50.00"
    }},
      "genericDrugs": [
        {
          "name": "Glucophage",
          "image": "images/glucophage.jpg",
          "composition": "Metformin hydrochloride",
          "seller": "Bristol-Myers Squibb",
          "quality": "FDA-approved",
          "qualityPercentage": "95.5%"
        },{
              "name": "Glimepiride",
              "image": "images/DRUG 3.jpg",
              "composition": "Glimepiride oral tablet",
              "seller": "Various sellers, including pharmacies and online retailers",
              "quality": "FDA-approved",
              "qualityPercentage": "79.9"
         }, {
              "name": "Pioglitazone",
              "image": "images/drug 3.0.jpg",
              "composition": "Pioglitazone",
              "seller": "Actos, Duetact, Incresync, Oseni, Tandemact",
              "quality": "FDA-approved",
              "qualityPercentage": "85.6"
            },
            {
              "name": "Empagliflozin (Jardiance)",
              "image": "images/drug 3.1.jpg",
              "composition": "Empagliflozin",
              "seller": "Boehringer Ingelheim Pharmaceuticals, Inc.",
              "quality": "FDA-approved",
            },
        // Add more generic drugs for Metformin
      ]
    },
    "Aspirin": {
        "mainDrug": {
          "name": "Aspirin",
          "image": "images/asprin1.jpg",
          "composition": "Acetylsalicylic acid",
          "seller": "Various sellers",
          "quality": "FDA-approved",
          "qualityPercentage": {
            "good": "80.00",
            "bad": "0.00",
            "average": "20.00"
          }
        },
        "genericDrugs": [
          {
            "name": "Bayer Aspirin",
            "image": "images/bayer-aspirin.jpg",
            "composition": "Acetylsalicylic acid",
            "seller": "Bayer",
            "quality": "FDA-approved",
            "qualityPercentage": "99.9%"
          },
         
          {
            "name": "Methotrexate",
            "image": "images/methotrexate.jpg",
            "composition": "Methotrexate sodium",
            "seller": "Pfizer",
            "quality": "FDA-approved",
            "qualityPercentage": "98.5%"
          },
          {
            "name": "Acetaminophen",
            "image": "images/acetaminophen.jpg",
            "composition": "Paracetamol",
            "seller": "Johnson & Johnson",
            "quality": "FDA-approved",
            "qualityPercentage": "99.5%"
          },
          {
            "name": "Plaquenil",
            "image": "images/plaquenil.jpg",
            "composition": "Hydroxychloroquine",
            "seller": "Sanofi",
            "quality": "FDA-approved",
            "qualityPercentage": "96.5%"

          },
          // Add more generic drugs for Aspirin
        ]
      },
      "Pantoprazole 40": {
        "mainDrug": {
          "name": "Pantoprazole 40",
          "image": "images/pantoprazole 40.jpg",
          "composition": "Pantoprazole sodium",
          "seller": "Various sellers",
          "quality": "FDA-approved",
          "qualityPercentage": {
            "good": "70.00",
            "bad": "3.00",
            "average": "65.00"
          }
        },
        "genericDrugs": [
            {
                "name": "Rabeprazole",
                "image": "images/rabeprazole.jpg",
                "composition": "Rabeprazole sodium",
                "seller": "Teva Pharmaceuticals",
                "quality": "FDA-approved",
                "qualityPercentage": "98.5%"
              },
              {
                "name": "Esomeprazole",
                "image": "images/esomeprazole.jpg",
                "composition": "Esomeprazole magnesium",
                "seller": "Teva Pharmaceuticals",
                "quality": "FDA-approved",
                "qualityPercentage": "98.5%"
              },
          {
            "name": "Omeprazole",
            "image": "images/omeprazole.jpg",
            "composition": "Omeprazole magnesium",
            "seller": "AstraZeneca",
            "quality": "FDA-approved",
            "qualityPercentage": "97.5%"
          },
          {
            "name": "Lansoprazole",
            "image": "images/lansoprazole.jpg",
            "composition": "Lansoprazole",
            "seller": "Takeda Pharmaceuticals",
            "quality": "FDA-approved",
            "qualityPercentage": "97.2%"
          },
          // Add more generic drugs for Pantoprazole 40
        ]
      }
    };
       


if (drugData[drugName]) {
    const mainDrugInfo = drugData[drugName].mainDrug;
    const genericDrugs = drugData[drugName].genericDrugs;

    drugNameElement.textContent = mainDrugInfo.name;
    drugImageElement.src = mainDrugInfo.image;
    drugImageElement.alt = mainDrugInfo.name;
    drugCompositionElement.textContent = `Composition: ${mainDrugInfo.composition}`;
    drugSellerElement.textContent = `Seller: ${mainDrugInfo.seller}`;
    drugQualityElement.textContent = `Quality: ${mainDrugInfo.quality}`;
    drugQualityPercentageElement.textContent = `Quality Percentage: Good: ${mainDrugInfo.qualityPercentage.good}%, Bad: ${mainDrugInfo.qualityPercentage.bad}%, Average: ${mainDrugInfo.qualityPercentage.average}%`;

    const genericDrugsHTML = `
        <h3>Generic Drugs</h3>
        <ul>
            ${genericDrugs.map(genericDrug => `
                <li>
                    <img src="${genericDrug.image}" alt="${genericDrug.name} image">
                </li>
            `).join("")}
        </ul>
    `;
    genericDrugsDiv.innerHTML = genericDrugsHTML;

    const genericDrugInfoHTML = `
        <h3>Generic Drug Information</h3>
        <ul>
            ${genericDrugs.map(genericDrug => `
                <li>
                    <h4>${genericDrug.name}</h4>
                    <p><b>Composition:</b> ${genericDrug.composition}</p>
                    <p><b>Seller:</b> ${genericDrug.seller}</p>
                    <p><b>Quality:</b> ${genericDrug.quality}</p>
                   <p><b>Quality Percentage:</b> ${genericDrug.qualityPercentage}</p>
                </li>
            `).join("")}
        </ul>
    `;
    genericDrugInfoDiv.innerHTML = genericDrugInfoHTML;
} else {
    drugInfoDiv.innerHTML = 'Drug not found.';
}