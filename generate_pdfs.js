import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function createRegulationsPDF() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Helper to add a page with header
  function addPage(title, subtitle) {
    const page = pdfDoc.addPage([595, 842]); // A4
    const { width, height } = page.getSize();

    // Top Header Banner
    page.drawRectangle({
      x: 0,
      y: height - 60,
      width: width,
      height: 60,
      color: rgb(0.08, 0.12, 0.22) // Navy
    });

    page.drawText('NATIONAL OCCUPATIONAL SAFETY & HEALTH ADMINISTRATION', {
      x: 40,
      y: height - 28,
      size: 9,
      font: fontBold,
      color: rgb(0.6, 0.7, 0.9)
    });

    page.drawText(title, {
      x: 40,
      y: height - 46,
      size: 14,
      font: fontBold,
      color: rgb(1, 1, 1)
    });

    // Page number / footer
    page.drawText('STATUTORY REGULATION • OFFICIAL COMPLIANCE DOCUMENT • 2026', {
      x: 40,
      y: 25,
      size: 8,
      font: fontRegular,
      color: rgb(0.5, 0.5, 0.5)
    });

    return page;
  }

  // Page 1
  let page = addPage('Industrial Workplace Safety Standard 2026', 'General Mandates');
  let y = 740;

  page.drawText('DOCUMENT REFERENCE: OSHA-IWSS-2026-REV4', {
    x: 40,
    y: y,
    size: 10,
    font: fontBold,
    color: rgb(0.2, 0.3, 0.7)
  });
  y -= 25;

  page.drawText('1. SCOPE AND STATUTORY APPLICATION', {
    x: 40,
    y: y,
    size: 12,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1)
  });
  y -= 18;

  const introText = 
    "This standard specifies mandatory occupational health, structural egress, fire prevention,\n" +
    "and mechanical safety specifications for heavy manufacturing and fabrication facilities.\n" +
    "All industrial facilities operating with over 20 personnel must adhere strictly to these clauses.";
  page.drawText(introText, { x: 40, y: y, size: 9, font: fontRegular, color: rgb(0.2, 0.2, 0.2), lineHeight: 14 });
  y -= 50;

  const clausesP1 = [
    {
      num: "Section 1.3.0 - Designated Safety Leadership",
      req: "Manufacturing facilities employing over 50 floor personnel must appoint a certified Environmental Health & Safety (EHS) officer with direct reporting to the plant executive director."
    },
    {
      num: "Section 2.1.5 - Personal Protective Equipment (PPE) Compliance",
      req: "Employers must supply ANSI-certified hard hats, steel-toed footwear, high-velocity eye protection, and certified respiratory gear with individual quantitative fit-test records on file."
    },
    {
      num: "Section 3.1.4 - Floor Diagram Posting & Assembly Point Demarcation",
      req: "Architectural floor maps reflecting active building layouts, primary evacuation routes, and designated exterior assembly muster points must be posted at each primary stairwell and entryway."
    },
    {
      num: "Section 3.2.1 - Illuminated Egress Signage (MANDATORY LIFE-SAFETY)",
      req: "All primary and secondary emergency exits must feature self-illuminated or battery-backed illuminated signage visible from a minimum distance of 30 meters under zero ambient illumination conditions."
    },
    {
      num: "Section 3.5.1 - Simulated Evacuation Exercises",
      req: "A documented whole-facility emergency evacuation drill must be conducted at minimum once every 12 calendar months with muster attendance records and evacuation time audits."
    },
    {
      num: "Section 4.1.2 - Portable Fire Suppression Systems",
      req: "Adequate numbers of certified Type-ABC dry chemical or CO2 fire extinguishers must be mounted along designated access pathways at intervals not exceeding 25 meters."
    }
  ];

  for (const c of clausesP1) {
    page.drawText(c.num, { x: 40, y: y, size: 10, font: fontBold, color: rgb(0.15, 0.2, 0.35) });
    y -= 14;
    page.drawText(c.req, { x: 40, y: y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.25, 0.25), maxWidth: 515, lineHeight: 12 });
    y -= 38;
  }

  // Page 2
  page = addPage('Industrial Workplace Safety Standard 2026', 'Part II: Systems & Maintenance');
  y = 740;

  const clausesP2 = [
    {
      num: "Section 4.1.8 - Periodic Hydrostatic & Tag Inspection (CRITICAL)",
      req: "All mounted fire extinguishers must undergo formal maintenance, pressure inspection, and physical certification collar tagging every 6 calendar months by an authorized inspection agency."
    },
    {
      num: "Section 5.1.9 - Preventative Machine Safeguards & Interlocks",
      req: "Heavy hydraulic stamping presses, shears, and CNC machinery must undergo monthly interlock, optical light-curtain, and emergency stop circuit calibration with test certificates."
    },
    {
      num: "Section 5.3.4 - High-Voltage Circuit & Distribution Audits",
      req: "Main electrical switchboards and sub-distribution panels must be thermally imaged and certified for arc flash compliance bi-annually by a licensed electrical inspection engineer."
    },
    {
      num: "Section 6.1.0 - Mandatory Induction & Hazard Training",
      req: "100% of shop floor operational staff must complete foundational industrial safety training prior to equipment operation, with refresher courses mandated every 12 months."
    },
    {
      num: "Section 7.4.2 - Medical First Response Stations",
      req: "Fully stocked Class-B medical first aid stations must be installed in each production quadrant and formally verified monthly for seal integrity and medicine expiration dates."
    },
    {
      num: "Section 8.2.0 - Occupational Injury & Near-Miss Registry",
      req: "All workplace near-misses, first-aid incidents, and lost-time injuries must be digitally registered within 24 hours of occurrence in a centralized safety log available for audit review."
    }
  ];

  for (const c of clausesP2) {
    page.drawText(c.num, { x: 40, y: y, size: 10, font: fontBold, color: rgb(0.15, 0.2, 0.35) });
    y -= 14;
    page.drawText(c.req, { x: 40, y: y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.25, 0.25), maxWidth: 515, lineHeight: 12 });
    y -= 42;
  }

  return await pdfDoc.save();
}

async function createCompanyReportPDF() {
  const pdfDoc = await PDFDocument.create();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Helper to add a page with header
  function addPage(title) {
    const page = pdfDoc.addPage([595, 842]);
    const { width, height } = page.getSize();

    page.drawRectangle({
      x: 0,
      y: height - 60,
      width: width,
      height: 60,
      color: rgb(0.1, 0.25, 0.2) // Forest / Slate Green
    });

    page.drawText('APEX MANUFACTURING PVT. LTD. • EHS AUDIT DIVISION', {
      x: 40,
      y: height - 28,
      size: 9,
      font: fontBold,
      color: rgb(0.7, 0.9, 0.8)
    });

    page.drawText(title, {
      x: 40,
      y: height - 46,
      size: 14,
      font: fontBold,
      color: rgb(1, 1, 1)
    });

    page.drawText('CONFIDENTIAL INTERNAL AUDIT REPORT • PLANT 4 INDUSTRIAL CORRIDOR • Q1 2026', {
      x: 40,
      y: 25,
      size: 8,
      font: fontRegular,
      color: rgb(0.5, 0.5, 0.5)
    });

    return page;
  }

  // Page 1
  let page = addPage('Internal Safety & Operations Audit Report Q1 2026');
  let y = 740;

  page.drawText('FACILITY: Plant 4 - Heavy Fabrication Bay | AUDIT DATE: March 12, 2026', {
    x: 40,
    y: y,
    size: 10,
    font: fontBold,
    color: rgb(0.1, 0.4, 0.3)
  });
  y -= 25;

  page.drawText('EXECUTIVE SUMMARY & FINDINGS LOG', {
    x: 40,
    y: y,
    size: 12,
    font: fontBold,
    color: rgb(0.1, 0.1, 0.1)
  });
  y -= 18;

  const intro = 
    "This report documents internal physical inspections, employee records, and machinery audits\n" +
    "conducted during Q1 2026 across Plant 4 facilities. Evidence findings are cataloged below.";
  page.drawText(intro, { x: 40, y: y, size: 9, font: fontRegular, color: rgb(0.2, 0.2, 0.2), lineHeight: 14 });
  y -= 40;

  const findingsP1 = [
    {
      title: "1. Leadership & Governance (Section 1.3.0)",
      body: "Certified Environmental Health & Safety Officer R. Sharma is appointed and maintains active oversight with monthly executive briefings. Certifications are valid through 2027."
    },
    {
      title: "2. Worker Personal Protective Equipment (Section 2.1.5)",
      body: "Helmets and steel-toed boots were distributed to all 88 operators. However, particulate respirator fit-test verification records for the 14 grinding bay workers remain pending."
    },
    {
      title: "3. Facility Evacuation Plans (Section 3.1.4)",
      body: "Exterior muster point in Parking Lot A is marked. However, floor egress maps in primary stairwells are weathered and have not been updated to include the 2025 warehouse expansion."
    },
    {
      title: "4. Emergency Egress & Signage (Section 3.2.1)",
      body: "During the walkthrough, standard painted exit doors were noted. No record or verification of illuminated or battery-backed exit signs was found in facility inspection files."
    },
    {
      title: "5. Emergency Evacuation Drills (Section 3.5.1)",
      body: "No plant-wide emergency fire drill was conducted in the preceding 12 calendar months. Facility records show the last full evacuation simulation took place on November 14, 2024."
    },
    {
      title: "6. Portable Fire Extinguisher Provision (Section 4.1.2)",
      body: "14 Type-ABC fire extinguishers are mounted across Shop Floors A and B at measured intervals of 18 meters with clear unobstructed pathways."
    }
  ];

  for (const f of findingsP1) {
    page.drawText(f.title, { x: 40, y: y, size: 10, font: fontBold, color: rgb(0.1, 0.3, 0.2) });
    y -= 14;
    page.drawText(f.body, { x: 40, y: y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.25, 0.25), maxWidth: 515, lineHeight: 12 });
    y -= 38;
  }

  // Page 2
  page = addPage('Internal Safety & Operations Audit Report Q1 2026 - Part II');
  y = 740;

  const findingsP2 = [
    {
      title: "7. Fire Extinguisher Periodic Inspection (Section 4.1.8)",
      body: "Physical inspection tags on all 14 extinguishers show inspection dates from August 2025 (>7 months ago). Overdue for the mandatory 6-month hydrostatic and pressure recertification."
    },
    {
      title: "8. Machinery Safeguards & Interlocks (Section 5.1.9)",
      body: "Hydraulic stamping press interlocks were verified operational. However, optical light-curtain calibration certificates on CNC Units 3 and 4 have lapsed by 45 calendar days."
    },
    {
      title: "9. Electrical Switchgear & Panel Inspection (Section 5.3.4)",
      body: "General maintenance log mentions routine panel check on page 12. However, thermographic infrared survey images and licensed electrical engineer sign-offs are missing."
    },
    {
      title: "10. Workforce Safety Training (Section 6.1.0)",
      body: "Training matrix in Appendix C confirms 88 of 88 floor operators completed the 2026 Safety Induction Modules with documented test scores and signed attendance logs."
    },
    {
      title: "11. Medical First Aid Stations (Section 7.4.2)",
      body: "6 First Aid boxes checked and replenished on February 28, 2026. Antiseptics, burn dressings, and eye wash bottles are within valid manufacturer expiration dates."
    },
    {
      title: "12. Incident & Near-Miss Documentation (Section 8.2.0)",
      body: "A digital log is maintained for severe injuries. Near-miss events and minor cuts are currently recorded in informal paper shift logbooks and not consolidated into the central register."
    }
  ];

  for (const f of findingsP2) {
    page.drawText(f.title, { x: 40, y: y, size: 10, font: fontBold, color: rgb(0.1, 0.3, 0.2) });
    y -= 14;
    page.drawText(f.body, { x: 40, y: y, size: 8.5, font: fontRegular, color: rgb(0.25, 0.25, 0.25), maxWidth: 515, lineHeight: 12 });
    y -= 42;
  }

  return await pdfDoc.save();
}

async function main() {
  const dirs = [
    './demo_documents',
    './public/demo_documents'
  ];

  for (const d of dirs) {
    if (!fs.existsSync(d)) {
      fs.mkdirSync(d, { recursive: true });
    }
  }

  console.log('Generating Regulations PDF...');
  const regPdfBytes = await createRegulationsPDF();
  fs.writeFileSync('./demo_documents/Industrial_Workplace_Safety_Standard_2026.pdf', regPdfBytes);
  fs.writeFileSync('./public/demo_documents/Industrial_Workplace_Safety_Standard_2026.pdf', regPdfBytes);
  console.log('✓ Created Industrial_Workplace_Safety_Standard_2026.pdf');

  console.log('Generating Company Report PDF...');
  const repPdfBytes = await createCompanyReportPDF();
  fs.writeFileSync('./demo_documents/Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf', repPdfBytes);
  fs.writeFileSync('./public/demo_documents/Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf', repPdfBytes);
  console.log('✓ Created Apex_Manufacturing_Internal_Inspection_Report_Q1_2026.pdf');

  console.log('Done! Both PDFs generated in ./demo_documents and ./public/demo_documents');
}

main().catch(console.error);
