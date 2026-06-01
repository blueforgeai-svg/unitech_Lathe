/**
 * Uni-Tech Machines - Complete Product Database
 * All 78 products across 7 categories
 */

const MACHINES_DATA = {
  categories: [
    { id: 'lathe', name: 'Lathe Machine', icon: 'fa-cogs', count: 57 },
    { id: 'drilling', name: 'Drilling Machine', icon: 'fa-bolt', count: 5 },
    { id: 'slotting', name: 'Slotting Machine', icon: 'fa-cut', count: 5 },
    { id: 'hydraulic', name: 'Hydraulic Press', icon: 'fa-compress-arrows-alt', count: 4 },
    { id: 'bandsaw', name: 'Metal Cutting Bandsaw', icon: 'fa-saw', count: 3 },
    { id: 'shaping', name: 'Shaping Machine', icon: 'fa-wave-square', count: 3 },
    { id: 'milling', name: 'Milling Machine', icon: 'fa-th-large', count: 1 }
  ],

  // ==================== LATHE MACHINES (57 Products) ====================
  lathe: [
    {
      id: 'heavy-duty-gear-head-lathe',
      name: 'Heavy Duty Gear Head Lathe Machine',
      price: '₹ 375,500',
      priceNumeric: 375500,
      brochure: 'https://pdf.indiamart.com/impdf/23231046391/718658/heavy-duty-gear-head-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/JS/BW/KB/718658/heavy-duty-gear-head-lathe-machine-500x500.jpg',
      specs: {
        swingOverBed: '455 mm',
        bedLength: '2740 mm',
        spindleBore: '80 mm',
        spindleSpeed: '30-1060 RPM',
        gearBoxType: 'All Geared',
        bedType: 'Flat And V Bed',
        countryOrigin: 'Made in India',
        phase: 'Three Phase',
        typeOfSpindleNose: 'A2-6',
        spindleMorseTaper: 'MT-6',
        spindleAdapterMorseTaper: 'MT-4',
        spindleSpeeds: '12',
        spindleSpeedRange: '30, 43, 55, 85, 115, 160, 210, 285, 400, 545, 785, 1060 RPM',
        spindleMounting: 'Taper Roller Bearings',
        motorHP: '3 HP',
        speed: '1440 RPM',
        leadScrew: '38 mm / 4 TPI',
        voltage: '440 V'
      },
      productDetails: {
        tailStock: {
          spindleDia: '60.3 mm',
          morseTaper: 'MT-4',
          spindleTravel: '180 mm'
        }
      },
      standardAccessories: [
        'Flame Hardened bed ways',
        'Double Shaft Norton Gear Box',
        'Chuck Plate',
        'Face Plate',
        'Steady Rest',
        'Follow Rest',
        'Splash Guard',
        'Center Adapter',
        'Dead centers 2 nos.',
        'Tool Post Key',
        'Motor pulley',
        'Thread dial indicator',
        'Change gear set (For metric and inch both)'
      ],
      optionalAccessories: [
        'Dog Chuck',
        'Thru Chuck',
        'Taper turning attachment',
        'Coolant pump with tank and assembly',
        'Electricals (Motor)',
        'Wirings',
        'V-belts and fittings'
      ],
      threads: {
        metric: '17 / 0.5 mm to 15 mm Pitch',
        inch: '40 / 2 to 60 TPI'
      },
      feeds: {
        longitudinal: '40 / 0.066 to 2 mm/rev of spindle',
        cross: '40 / 0.0165 to 0.5 mm/rev of spindle'
      }
    },
    {
      id: 'automatic-light-duty-lathe',
      name: 'Automatic Light Duty Lathe Machine',
      price: '₹ 82,000',
      priceNumeric: 82000,
      brochure: 'https://pdf.indiamart.com/impdf/23231007873/718658/automatic-light-duty-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380800754/EE/YG/VJ/718658/automatic-light-duty-lathe-machine-500x500.jpg',
      specs: {
        bedLength: '1370mm',
        swingOverBed: '320 mm',
        spindleBore: '38 mm',
        bedWidth: '230 mm',
        type: 'Light Duty Cone Pulley',
        spindleSpeed: '35-950 RPM',
        machineVoltage: '415 V',
        rangeOfSpindleSpeeds: '35 to 950 RPM',
        power: '3 Phase',
        countryOrigin: 'Made in India',
        brand: 'Uni-Tech',
        phase: 'Three Phase',
        drive: "No-1 'V' Belt-B-42",
        motorHP: '1 HP',
        leadScrew: '4 TPI 32 mm Dia',
        spindleDia: '38 mm',
        morseTaper: 'MT-3',
        spindleTravel: '125 mm',
        voltage: '440 V',
        crossSlideSize: '120x330 mm',
        carriageSize: '330x365 mm',
        crossSlideTravel: '250 mm',
        topSlideTravel: '115 mm'
      },
      productDetails: {
        capacity: {
          heightOfCenter: '165 mm',
          swingOverSlide: '230 mm',
          swingOverBed: '320 mm',
          swingInGap: '530 mm',
          widthOfBed: '230 mm'
        },
        headStock: {
          spindleBore: '38 mm',
          taperBoreInSpindle: 'MT-3',
          spindleNose: '8 TPI',
          rangeOfSpindleSpeeds: '35 To 950 RPM',
          noOfSpeeds: '8'
        },
        thread: {
          metric: '52 mm',
          inch: 'MT-4'
        },
        lengthBetweenCentre: [
          '1350 mm x 510 mm',
          '1635 mm x 770 mm',
          '1825 mm x 955 mm'
        ]
      },
      standardAccessories: [
        'Chuck Plate',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key'
      ]
    },
    {
      id: '7-feet-heavy-duty-lathe',
      name: '7 Feet Heavy Duty Lathe Machines',
      price: '₹ 1,40,998',
      priceNumeric: 140998,
      brochure: 'https://pdf.indiamart.com/impdf/25954336562/718658/7-feet-heavy-duty-lathe-machines.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/SI/SH/BI/718658/7-feet-heavy-duty-lathe-machines-500x500.jpg',
      specs: {
        swingOverBed: '455 mm',
        bedLength: '7 Feet',
        distanceBetweenCenters: '1575',
        motorPower: '2 HP',
        spindleSpeedRange: '25 To 500 RPM',
        spindleBore: '52 mm',
        heightOfCentre: '254 mm',
        applicableIndustry: 'Paper Mills, Oil Industry, Steel Rolling Mills, Tool Room, Sugar Mills, Power Plant',
        bedWidth: '325 mm',
        machineType: 'Belt Driven Heavy Duty Lathe Machine',
        distanceBetweenCentre: '965 mm',
        swingOverCrossSlide: '285 mm',
        maximumSwingInGap: '775 mm',
        crossSlideTravel: '280 mm',
        machineCondition: 'New',
        tailStockSpindleTaperBore: 'MT-4',
        countryOrigin: 'Made in India',
        spindleNose: '6 TPI'
      },
      productDetails: {
        capacity: {
          heightOfCentre: '254 mm',
          swingOverSlide: '285 mm',
          swingOverBed: '455 mm',
          swingInGap: '775 mm',
          widthOfBed: '325 mm'
        },
        lengthBetweenCentre: [
          '1675 mm x 500 mm',
          '2130 mm x 965 mm',
          '2740 mm x 1575 mm',
          '3045 mm x 1900 mm',
          '3655 mm x 2115 mm'
        ]
      },
      standardAccessories: [
        'Face Plate',
        'Chuck Plate',
        'Steady Rest',
        'Follow Rest',
        'Motor Pulley',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key'
      ]
    },
    {
      id: 'semi-automatic-medium-duty-lathe',
      name: 'Semi Automatic Medium Duty Lathe Machine',
      price: '₹ 1,14,000',
      priceNumeric: 114000,
      brochure: 'https://pdf.indiamart.com/impdf/23231011133/718658/semi-automatic-medium-duty-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/TG/RP/VJ/718658/semi-automatic-medium-duty-lathe-machine-500x500.png',
      specs: {
        swingOverBed: '400 mm',
        bedLength: '6 Feet',
        spindleBore: '52 mm',
        heightOfCentre: '215 mm',
        spindleSpeed: '40-615 RPM',
        machineType: 'Belt Driven Lathe Machine',
        bedType: 'Flat And V Bed',
        machineVoltage: '440 V',
        countryOrigin: 'Made in India',
        drive: "No-2 'V' Belt-B-46",
        motorHP: '15 HP',
        leadScrew: '4 TPI 32 mm Dia',
        topSlideTravel: '125 mm',
        crossSlideTravel: '254 mm',
        carriageSize: '385x445 mm',
        crossSlideSize: '170x385 mm',
        brand: 'Uni-Tech',
        voltage: '220 V'
      },
      productDetails: {
        capacity: {
          heightOfCenter: '215 mm',
          swingOverSlide: '254 mm',
          swingOverBed: '405 mm',
          swingInGap: '650 mm',
          widthOfBed: '275 mm'
        },
        headStock: {
          spindleBore: '52 mm',
          taperBoreInSpindle: 'MT-4',
          spindleNose: '6 TPI',
          rangeOfSpindleSpeeds: '40 To 615 RPM'
        },
        tailStock: {
          spindleDia: '52 mm',
          morseTaper: 'MT-4',
          spindleTravel: '160 mm'
        },
        thread: {
          metric: '52 mm',
          inch: 'MT-4'
        },
        lengthBetweenCentre: [
          '1350 mm x 510 mm',
          '1635 mm x 770 mm',
          '1825 mm x 955 mm'
        ]
      },
      standardAccessories: [
        'Chuck Plate',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key',
        'Motor Pulley'
      ]
    },
    {
      id: '16-feet-heavy-duty-plano-lathe',
      name: '16 Feet Heavy Duty Plano Type Lathe Machine',
      price: '₹ 4,62,000',
      priceNumeric: 462000,
      brochure: 'https://pdf.indiamart.com/impdf/12483206855/718658/5-5-feet-heavy-duty-plano-type-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/CP/WI/MJ/718658/heavy-duty-plano-type-lathe-machine-500x500.jpeg',
      specs: {
        swingOverBed: '455 mm',
        distanceBetweenCenters: '4600',
        motorPower: '7.5 HP',
        spindleSpeedRange: '25 To 500 RPM',
        spindleBore: '125 mm',
        heightOfCentre: '450 mm',
        applicableIndustry: 'Paper Mills, Oil Industry, Steel Rolling Mills, Tool Room, Sugar Mills',
        bedWidth: '450 mm',
        machineType: 'Belt Driven Heavy Duty Lathe Machine',
        swingOverCrossSlide: '285 mm',
        maximumSwingInGap: '775 mm',
        crossSlideTravel: '400 mm',
        machineCondition: 'New',
        tailStockSpindleTaperBore: 'MT-4',
        countryOrigin: 'Made in India',
        bedLength: '20 Feet',
        distanceBetweenCentre: '500 mm'
      },
      productDetails: {
        carriage: {
          crossSlideSize: '200x500 mm',
          carriageSize: '450x500 mm',
          crossSlideTravel: '280 mm',
          topSlideTravel: '150 mm'
        },
        capacity: {
          heightOfCentre: '254 mm',
          swingOverSlide: '285 mm',
          swingOverBed: '455 mm',
          swingInGap: '775 mm',
          widthOfBed: '325 mm'
        },
        lengthBetweenCentre: [
          '1675 mm x 500 mm',
          '2130 mm x 965 mm',
          '2740 mm x 1575 mm',
          '3045 mm x 1900 mm',
          '3655 mm x 2115 mm'
        ]
      },
      standardAccessories: [
        'Face Plate',
        'Chuck Plate',
        'Steady Rest',
        'Follow Rest',
        'Motor Pulley',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key'
      ]
    },
    {
      id: 'extra-heavy-duty-cone-pulley-lathe-he-800mm',
      name: 'Extra Heavy Duty Cone Pulley Lathe Machine (800mm)',
      price: '₹ 4,26,000',
      priceNumeric: 426000,
      brochure: 'https://pdf.indiamart.com/impdf/1994777373/718658/extra-heavy-duty-cone-pulley-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/GB/VH/MQ/718658/extra-heavy-duty-cone-pulley-lathe-machine-500x500.jpg',
      specs: {
        rollDia: '800 mm',
        swingOverBed: '455 mm',
        distanceBetweenCenters: '2115mm',
        rollLength: '3000 mm',
        bedLength: '3500 mm',
        spindleSpeed: '25-500 RPM',
        motorPower: '5 hp',
        controlType: 'Conventional',
        spindleSpeedRange: '25 - 500 RPM',
        spindleBore: '104 mm',
        bedType: 'Flat And V Bed',
        bedWidth: '450 mm',
        machineType: 'Belt Driven Extra Heavy Duty Lathe Machine'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm, engaged in Manufacturer and Exporter high functionality range of Lathe Machine, Slotting Machine, Drilling Machine, Hydraulic Press, Shaping Machine, Universal Milling Machine etc. Situated at Rajkot (Gujarat, India), we are backed by a wide and ultramodern infrastructural unit and provide these machines as per the ISO 9001:2008 set standards.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'precision-lathe-machine-750mm',
      name: 'Precision Lathe Machine (750mm)',
      price: '₹ 1,70,000',
      priceNumeric: 170000,
      brochure: 'https://pdf.indiamart.com/impdf/23309636388/718658/precision-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/LG/UT/WE/718658/precision-lathe-machine-500x500.jpg',
      specs: {
        latheType: 'Heavy Duty',
        maxSwingOverBed: '750 mm',
        betweenCenters: '965mm',
        spindleBore: '52 mm',
        bedLength: '2130mm',
        swingOverBed: '455 mm',
        bedWidth: '325 mm',
        accuracyClass: 'Tool Room Grade',
        type: 'Heavy duty lathe',
        controlType: 'Conventional',
        spindleSpeed: '25-500 RPM',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '25 to 500 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm, engaged in Manufacturer and Exporter high functionality range of Lathe Machine, Slotting Machine, Drilling Machine, Hydraulic Press, Shaping Machine, Universal Milling Machine etc.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'light-duty-cone-pulley-lathe',
      name: 'Light Duty Cone Pulley Lathe Machine',
      price: '₹ 73,000',
      priceNumeric: 73000,
      brochure: 'https://pdf.indiamart.com/impdf/23309651455/718658/light-duty-cone-pulley-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/WB/QL/IO/718658/light-duty-cone-pulley-lathe-machine-500x500.jpg',
      specs: {
        bedLength: '1370mm',
        brand: 'UNI-TECH',
        swingOverBed: '320 mm',
        spindleBore: '38 mm',
        bedWidth: '230 mm',
        type: 'Light Duty Cone Pulley Lathe Machine',
        spindleSpeed: '35-950 RPM',
        machineVoltage: '415 V',
        rangeOfSpindleSpeeds: '35 to 950 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'uni-tech-cone-pulley-medium-duty-lathe',
      name: 'Uni-Tech Cone Pulley Medium Duty Lathe Machine',
      price: '₹ 1,20,000',
      priceNumeric: 120000,
      brochure: 'https://pdf.indiamart.com/impdf/23309653212/718658/uni-tech-cone-pulley-medium-duty-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/BJ/PZ/HJ/718658/uni-tech-cone-pulley-medium-duty-lathe-machine-500x500.jpg',
      specs: {
        bedLength: '6 Feet',
        spindleBore: '52 mm',
        swingOverBed: '275 mm',
        heightOfCentre: '215 mm',
        spindleSpeed: '40-615 RPM',
        type: 'Uni-tech Cone Pulley Medium Duty Lathe Machine',
        machineType: 'Belt Driven Lathe Machine',
        bedType: 'Flat And V Bed',
        machineVoltage: '440 V',
        rangeOfSpindleSpeeds: '40 to 615 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'high-speed-precision-lathe-machine',
      name: 'High Speed Precision Lathe Machine',
      price: '₹ 1,54,000',
      priceNumeric: 154000,
      brochure: 'https://pdf.indiamart.com/impdf/23309655833/718658/high-speed-precision-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/425235399/DM/JV/MC/718658/high-speed-precision-lathe-machine-500x500.jpeg',
      specs: {
        maxSwingOverBed: '250 mm',
        latheType: 'All Geared',
        betweenCenters: '955mm',
        spindleBore: '52 mm',
        bedLength: '1635mm',
        swingOverBed: '405 mm',
        bedWidth: '275 mm',
        accuracyClass: 'Tool Room Grade',
        type: 'High Speed Precision Lathe Machine',
        controlType: 'Conventional',
        spindleSpeed: '40-1200 RPM',
        rangeOfSpindleSpeeds: '500-1000 rpm',
        bedType: 'Flat And V Bed',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'all-geared-high-speed-lathe-machine',
      name: 'All Geared High Speed Lathe Machine',
      price: '₹ 3,50,000',
      priceNumeric: 350000,
      brochure: 'https://pdf.indiamart.com/impdf/23309713830/718658/heavy-duty-cone-pulley-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/NX/SB/MR/718658/all-geared-high-speed-lathe-machine-500x500.jpg',
      specs: {
        bedLength: '2740',
        spindleBore: '104 mm',
        swingOverBed: '580 mm',
        bedWidth: '375 mm (15")',
        spindleSpeed: '30-1060 RPM',
        type: 'All Geared High Speed Lathe Machine',
        gearBoxType: 'All Geared',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '1440 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'heavy-duty-cone-pulley-lathe-machine',
      name: 'Heavy Duty Cone Pulley Lathe Machine',
      price: '₹ 1,59,000',
      priceNumeric: 159000,
      brochure: 'https://pdf.indiamart.com/impdf/23309724073/718658/geared-lathes.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/FS/KE/AV/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        application: 'Metal',
        swingOverBed: '455 mm',
        distanceBetweenCenters: '965mm',
        bedLength: '2130mm',
        maxWorkSize: '40 in',
        material: 'Cast Iron',
        powerSource: 'Electric',
        spindleSpeedRange: '25-500 RPM',
        motorPower: '3 hp',
        spindleBore: '52 mm',
        heightOfCentre: '254 mm',
        size: '10 Inch',
        machineType: 'Manual',
        bedWidth: '325 mm',
        phase: 'Three Phase',
        numberOfSpindleSpeeds: '8',
        swingOverCrossSlide: '285 mm',
        maximumSwingInGap: '775 mm',
        crossSlideTravel: '280 mm',
        leadScrewPitch: '4 T.P.I',
        tailStockSpindleTaperBore: 'MT-4',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'uni-tech-geared-lathes',
      name: 'Uni Tech Geared Lathes',
      price: '₹ 1,18,000',
      priceNumeric: 118000,
      brochure: 'https://pdf.indiamart.com/impdf/2855421679588/718658/cone-pulley-lathe.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/HR/AJ/YU/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        bedLength: '1370mm',
        spindleBore: '38 mm',
        swingOverBed: '320 mm',
        bedWidth: '230 mm',
        spindleSpeed: '40-1200 rpm',
        type: 'Geared Lathes',
        gearBoxType: 'All Geared',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '54-1200 rpm',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'bush-bearing-type-lathe-machine',
      name: 'Bush Bearing Type Lathe Machine',
      price: '₹ 1,81,000',
      priceNumeric: 181000,
      brochure: 'https://pdf.indiamart.com/impdf/24270969648/718658/bush-bearing-type-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/JI/TL/XN/718658/bush-bearing-type-lathe-machine-500x500.jpg',
      specs: {
        maxSwingOverBed: '750 mm',
        latheType: 'Heavy Duty',
        bedLength: '2740mm',
        swingOverBed: '455 mm',
        spindleBore: '104 mm',
        bedWidth: '325 mm',
        type: 'Heavy duty lathe',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '25 to 500 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'over-size-lathe-machine',
      name: 'Over Size Lathe Machine',
      price: '₹ 4,51,000',
      priceNumeric: 451000,
      brochure: 'https://pdf.indiamart.com/impdf/24270990830/718658/over-size-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/JF/YH/ND/718658/center-lathe-machine-500x500.jpg',
      specs: {
        latheType: 'Heavy Duty',
        maxSwingOverBed: '750 mm',
        distanceBetweenCenters: '2000 mm',
        bedLength: '3000 mm',
        swingOverBed: '455 mm',
        spindleBore: '150 mm',
        bedWidth: '450 mm',
        type: 'Extra Heavy Duty Cone Pulley Lathe Machine',
        controlType: 'Conventional',
        rangeOfSpindleSpeeds: '500-1000 rpm',
        motorPower: '7.5 hp',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        bedType: 'Flat And V Bed',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'center-lathe-machine',
      name: 'Center Lathe Machine',
      price: '₹ 1,98,000',
      priceNumeric: 198000,
      brochure: 'https://pdf.indiamart.com/impdf/24271005962/718658/center-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/MR/GM/GS/718658/center-lathe-machine-500x500.jpg',
      specs: {
        betweenCenters: '1500 mm',
        spindleBore: '80 mm',
        swingOverBed: '320 mm',
        latheMachineType: 'Cone Pulley',
        bedWidth: '325 mm',
        spindleSpeed: '25-500RPM',
        type: 'Heavy duty lathe',
        bedType: 'Flat And V Bed',
        machineVoltage: '415 V',
        rangeOfSpindleSpeeds: '25 to 500 RPM',
        power: '3 Phase',
        modelName: 'Uni-Tech',
        layout: 'Horizontal'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'uni-tech-kharad-machine',
      name: 'Uni Tech Kharad Machine',
      price: '₹ 75,000',
      priceNumeric: 75000,
      brochure: 'https://pdf.indiamart.com/impdf/24271029688/718658/kharad-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/XI/IC/RU/718658/uni-tech-kharad-machine-500x500.jpg',
      specs: {
        maxSwingOverBed: '250 mm',
        latheType: 'Light Duty',
        bedLength: '1370mm',
        swingOverBed: '320 mm',
        spindleBore: '38 mm',
        bedWidth: '230 mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '35 to 950 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'iti-lathe-machine',
      name: 'ITI Lathe Machine',
      price: '₹ 1,31,000',
      priceNumeric: 131000,
      brochure: 'https://pdf.indiamart.com/impdf/24271037730/718658/iti-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/AO/DU/YN/718658/iti-lathe-machine-500x500.jpg',
      specs: {
        maxSwingOverBed: '500 mm',
        latheType: 'All Geared',
        bedLength: '1635mm',
        swingOverBed: '320 mm',
        spindleBore: '38 mm',
        bedWidth: '230 mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '35 to 950 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'ss-and-sc-center-lathe-machine',
      name: 'SS And SC Center Lathe Machine',
      price: '₹ 3,20,000',
      priceNumeric: 320000,
      brochure: 'https://pdf.indiamart.com/impdf/24271058412/718658/ss-and-sc-center-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/AC/CE/HX/718658/ss-and-sc-center-lathe-machine-500x500.jpg',
      specs: {
        betweenCenters: '3500mm',
        spindleBore: '150 mm',
        swingOverBed: '455 mm',
        latheMachineType: 'Horizontal Lathe',
        bedWidth: '325 mm',
        spindleSpeed: '25-500 RPM',
        bedType: 'Flat And V Bed',
        machineVoltage: '440 V',
        rangeOfSpindleSpeeds: '25 to 500 RPM',
        power: '3 Phase',
        modelName: 'Uni-Tech',
        layout: 'Horizontal'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'agm-lathe-machine',
      name: 'AGM Lathe Machine',
      price: '₹ 1,31,000',
      priceNumeric: 131000,
      brochure: 'https://pdf.indiamart.com/impdf/24316294748/718658/agm-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/NL/MX/SS/718658/agm-lathe-machine-500x500.jpg',
      specs: {
        maxSwingOverBed: '250 mm',
        latheType: 'All Geared',
        bedLength: '1825mm',
        swingOverBed: '405 mm',
        spindleBore: '52 mm',
        bedWidth: '275 mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '35 to 950 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'agl-lathe-machine',
      name: 'AGL Lathe Machine',
      price: '₹ 1,12,500',
      priceNumeric: 112500,
      brochure: 'https://pdf.indiamart.com/impdf/24316306755/718658/agl-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/KD/QH/QV/718658/agl-lathe-machine-500x500.jpg',
      specs: {
        maxSwingOverBed: '250 mm',
        latheType: 'All Geared',
        bedLength: '1370mm',
        swingOverBed: '320 mm',
        spindleBore: '38 mm',
        bedWidth: '230 mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '35 to 950 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'extra-heavy-duty-cone-pulley-lathe-12ft',
      name: 'Extra Heavy Duty Cone Pulley Lathe Machine (12 Feet)',
      price: '₹ 3,05,500',
      priceNumeric: 305500,
      brochure: 'https://pdf.indiamart.com/impdf/23257063597/718658/extra-heavy-duty-cone-pulley-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/RJ/SI/QD/718658/extra-heavy-duty-cone-pulley-lathe-machine-500x500.jpg',
      specs: {
        swingOverBed: '455 mm',
        distanceBetweenCenters: '2000 mm',
        bedLength: '12 Feet',
        motorPower: '7.5 hp',
        spindleSpeedRange: '25 - 500 RPM',
        spindleBore: '52 mm',
        heightOfCentre: '254 mm',
        applicableIndustry: 'Steel Rolling Mills, Oil Industry, Mining, Power Plant, Paper Mills, Sugar Mills, Tool Room, Shipbuilding, Textile',
        bedWidth: '325 mm',
        machineType: 'Belt Driven Extra Heavy Duty Lathe Machine',
        numberOfSpindleSpeeds: '8',
        swingOverCrossSlide: '285 mm',
        maximumSwingInGap: '775 mm',
        crossSlideTravel: '280 mm',
        tailStockSpindleTaperBore: 'MT-4',
        countryOrigin: 'Made in India'
      },
      productDetails: {
        capacity: {
          heightOfCentre: '254 mm',
          swingOverSlide: '285 mm',
          swingOverBed: '455 mm',
          swingInGap: '775 mm',
          widthOfBed: '325 mm'
        },
        headStock: {
          spindleBore: '52 mm',
          taperBoreInSpindle: 'MT-4',
          spindleNose: '6 TPI',
          rangeOfSpindleSpeeds: '25 To 500 RPM',
          noOfSpeeds: '8'
        },
        carriage: {
          crossSlideSize: '200x500 mm',
          carriageSize: '450x500 mm',
          crossSlideTravel: '280 mm',
          topSlideTravel: '150 mm'
        },
        tailStock: {
          spindleDia: '52 mm',
          morseTaper: 'MT-4',
          spindleTravel: '190 mm'
        },
        thread: {
          metric: '52 mm',
          inch: 'MT-4'
        },
        leadScrew: '4 TPI 38 mm Dia',
        electrical: '2 H.P. 3 Phase',
        drive: "No-2 'V' Belt-C-68",
        lengthBetweenCentre: [
          '1675 mm x 500 mm',
          '2130 mm x 965 mm',
          '2740 mm x 1575 mm',
          '3045 mm x 1900 mm',
          '3655 mm x 2115 mm'
        ]
      },
      standardAccessories: [
        'Face Plate',
        'Chuck Plate',
        'Steady Rest',
        'Follow Rest',
        'Motor Pulley',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key'
      ],
      features: ['Hassle-free operations', 'Less operational noise', 'Low power consumption'],
      priceRange: 'Rs 50000 to 20 Lakh'
    },
    {
      id: 'light-duty-lathe-machine',
      name: 'Light Duty Lathe Machine',
      price: '₹ 72,500',
      priceNumeric: 72500,
      brochure: 'https://pdf.indiamart.com/impdf/1994777112/718658/light-duty-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/4/BS/HX/UI/718658/light-duty-lathe-machine-500x500.jpg',
      specs: {
        bedLength: '1370mm',
        brand: 'UNI-TECH',
        swingOverBed: '320 mm',
        spindleBore: '38 mm',
        bedWidth: '230 mm',
        type: 'Light Duty Cone Pulley',
        spindleSpeed: '35-950 RPM',
        machineVoltage: '415 V',
        rangeOfSpindleSpeeds: '35 to 950 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        lengthOfBed: "4'-6\", 5'-3\", 6'",
        size: "4'-6\", 5'-3\", 6'",
        heightOfCentre: '165 mm',
        automaticGrade: 'Semi-Automatic, Automatic',
        countryOrigin: 'Made in India'
      },
      productDetails: {
        capacity: {
          heightOfCentre: '165 mm',
          swingOverSlide: '230 mm',
          swingOverBed: '320 mm',
          swingInGap: '530 mm',
          widthOfBed: '230 mm'
        },
        headStock: {
          spindleBore: '38 mm',
          taperBoreInSpindle: 'MT-3',
          spindleNose: '8 TPI',
          rangeOfSpindleSpeeds: '35 To 950 RPM',
          noOfSpeeds: '8'
        },
        carriage: {
          crossSlideSize: '120x330 mm',
          carriageSize: '330x365 mm',
          crossSlideTravel: '250 mm',
          topSlideTravel: '115 mm'
        },
        tailStock: {
          spindleDia: '38 mm',
          morseTaper: 'MT-3',
          spindleTravel: '125 mm'
        },
        thread: {
          metric: '52 mm',
          inch: 'MT-4'
        },
        leadScrew: '4 TPI 32 mm Dia',
        electrical: '1 H.P. 3 Phase',
        drive: "No-1 'V' Belt-B-42",
        lengthBetweenCentre: [
          '1350 mm x 510 mm',
          '1635 mm x 770 mm',
          '1825 mm x 955 mm'
        ]
      },
      standardAccessories: [
        'Chuck Plate',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key'
      ],
      features: ['Low maintenance', 'Long service life', 'Easy to operate'],
      priceRange: 'Rs 50000 to 20 Lakh'
    },
    {
      id: 'medium-duty-lathe-machine',
      name: 'Medium Duty Lathe Machine',
      price: '₹ 1,11,000',
      priceNumeric: 111000,
      brochure: 'https://pdf.indiamart.com/impdf/1994777433/718658/medium-duty-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/CA/MR/WZ/718658/medium-duty-lathe-machine-500x500.jpg',
      specs: {
        bedLength: '6 Feet',
        spindleBore: '52 mm',
        swingOverBed: '405 mm',
        spindleSpeed: '40-615 RPM',
        type: 'Medium Duty Cone Pulley',
        machineType: 'Belt Driven Lathe Machine',
        bedType: 'Flat And V Bed',
        machineVoltage: '440 V',
        rangeOfSpindleSpeeds: '40 to 615 RPM',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        size: "4'-6\", 5'-3\", 6'",
        automaticGrade: 'Automatic, Semi-Automatic',
        lengthOfBed: "4'-6\", 5'-3\", 6'",
        bedWidth: '275 mm',
        countryOrigin: 'Made in India',
        heightOfCentre: '215 mm, 250 mm'
      },
      productDetails: {
        capacity: {
          heightOfCentre: '215 mm',
          swingOverSlide: '254 mm',
          swingOverBed: '405 mm',
          swingInGap: '650 mm',
          widthOfBed: '275 mm'
        },
        headStock: {
          spindleBore: '52 mm',
          taperBoreInSpindle: 'MT-4',
          spindleNose: '6 TPI',
          rangeOfSpindleSpeeds: '40 To 615 RPM',
          noOfSpeeds: '6'
        },
        carriage: {
          crossSlideSize: '170x385 mm',
          carriageSize: '385x445 mm',
          crossSlideTravel: '254 mm',
          topSlideTravel: '125 mm'
        },
        tailStock: {
          spindleDia: '52 mm',
          morseTaper: 'MT-4',
          spindleTravel: '160 mm'
        },
        thread: {
          metric: '52 mm',
          inch: 'MT-4'
        },
        leadScrew: '4 TPI 32 mm Dia',
        electrical: '1.5 H.P. 3 Phase',
        drive: "No-2 'V' Belt-B-46"
      },
      standardAccessories: [
        'Chuck Plate',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key',
        'Motor Pulley'
      ],
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 50000 to 20 Lakh'
    },
    {
      id: 'medium-duty-gear-head-lathe-machine',
      name: 'Medium Duty Gear Head Lathe Machine',
      price: '₹ 1,56,100',
      priceNumeric: 156100,
      brochure: 'https://pdf.indiamart.com/impdf/10718881555/718658/medium-duty-gear-head-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/LU/UN/XK/718658/medium-duty-lathe-machines-500x500.jpg',
      specs: {
        bedLength: '1825',
        spindleBore: '52 mm',
        swingOverBed: '405 mm',
        bedWidth: '275 mm',
        spindleSpeed: '40-1200 rpm',
        type: 'All Geared High Speed Lathe Machine',
        gearBoxType: 'All Geared',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '500-1000 rpm',
        modelName: 'UNI-TECH',
        power: '3 Phase',
        automaticGrade: 'Automatic, Semi-Automatic'
      },
      productDetails: {
        capacity: {
          centreHeight: '215 mm',
          swingOverBed: '423 mm',
          swingOverCrossSlide: '250 mm',
          swingInGap: '620 mm',
          widthOfBed: '277 mm'
        },
        models: {
          ugm1: { admitBetweenCentres: '450 mm', lengthOfBed: '1370 mm (4\'-6")', floorSpace: '1650x970 mm', approxWeight: '775-825 Kgs' },
          ugm2: { admitBetweenCentres: '725 mm', lengthOfBed: '1600 mm (5\'-3")', floorSpace: '1950x970 mm', approxWeight: '850-900 Kgs' },
          ugm3: { admitBetweenCentres: '950 mm', lengthOfBed: '1830 mm (6\')', floorSpace: '2100x970 mm', approxWeight: '875-925 Kgs' }
        },
        mainSpindle: {
          typeOfSpindleNose: 'Threaded',
          spindleBore: '38 mm',
          spindleMorseTaper: 'MT-5',
          spindleAdapterMorseTaper: 'MT-3',
          spindleSpeeds: '8',
          rpmRange: '54, 90, 140, 224, 315, 500, 775, 1200 RPM',
          spindleMounting: 'Taper Roller Bearings'
        },
        tailStock: {
          spindleDia: '50.8 mm',
          morseTaper: 'MT-4',
          spindleTravel: '145 mm'
        },
        leadScrew: {
          diameter: '31.75 mm / 4 TPI',
          threadsMetric: '17 / 0.5 mm to 15 mm Pitch',
          threadsInch: '40 / 2 to 60 TPI'
        }
      },
      standardAccessories: [
        'Flame Hardened Bed Ways',
        'Double Shaft Norton Gear Box',
        'Chuck Plate',
        'Face Plate',
        'Steady Rest',
        'Follow Rest',
        'Splash Guard',
        'Centre Adapter',
        'Dead Centers 2 Nos.',
        'Tool Post Key',
        'Motor Pulley',
        'Thread Dial Indicator',
        'Change Gear Set (For metric and inch both)'
      ],
      optionalAccessories: [
        'Dog Chuck',
        'Thru Chuck',
        'Taper turning attachment',
        'Coolant pump with tank and assembly',
        'Electric (Motor)',
        'Wirings',
        'V-belts and fittings'
      ],
      electrical: '2 H.P. X 1440 RPM X 3 Phase',
      features: ['Optimum performance', 'Less maintenance', 'Low power consumption'],
      priceRange: 'Rs 50000 to 20 Lakh'
    },
    {
      id: 'heavy-duty-lathe-machines',
      name: 'Heavy Duty Lathe Machines',
      price: '₹ 1,97,000',
      priceNumeric: 197000,
      brochure: 'https://pdf.indiamart.com/impdf/11484778873/718658/heavy-duty-lathe-machines.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/VY/VR/ES/718658/heavy-duty-lathe-machines-500x500.jpg',
      specs: {
        swingOverBed: '455 mm',
        distanceBetweenCenters: '1575',
        bedLength: '9 Feet',
        motorPower: '3 HP',
        spindleSpeedRange: '25 - 500 RPM',
        spindleBore: '52 mm',
        heightOfCentre: '254 mm',
        applicableIndustry: 'Mining, Sugar Mills, Paper Mills, Tool Room, Textile, Oil Industry, Shipbuilding, Steel Rolling Mills, Power Plant',
        bedWidth: '325 mm',
        machineType: 'Belt Driven Heavy Duty Lathe Machine',
        numberOfSpindleSpeeds: '8',
        swingOverCrossSlide: '285 mm',
        maximumSwingInGap: '775 mm',
        crossSlideTravel: '280 mm',
        tailStockSpindleTaperBore: 'MT-4',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: '9-feet-heavy-duty-lathe-machines',
      name: '9 Feet Heavy Duty Lathe Machines',
      price: '₹ 2,46,500',
      priceNumeric: 246500,
      brochure: 'https://pdf.indiamart.com/impdf/25954273112/718658/9-feet-heavy-duty-lathe-machines.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/JY/PI/AN/718658/9-feet-heavy-duty-lathe-machines-500x500.jpg',
      specs: {
        swingOverBed: '455 mm',
        distanceBetweenCenters: '1500 mm',
        bedLength: '9 Feet',
        spindleSpeedRange: '25-500 RPM',
        motorPower: '2 HP',
        heightOfCentre: '254 mm',
        applicableIndustry: 'Power Plant, Sugar Mills, Paper Mills, Tool Room, Oil Industry, Steel Rolling Mills',
        bedWidth: '325 mm',
        machineType: 'Belt Driven Heavy Duty Lathe Machine',
        distanceBetweenCentre: '1575 mm',
        swingOverCrossSlide: '285 mm',
        maximumSwingInGap: '775 mm',
        leadScrewPitch: '4 T.P.I',
        machineCondition: 'New',
        tailStockSpindleTaperBore: 'MT-4',
        countryOrigin: 'Made in India',
        spindleBore: '80 mm',
        crossSlideTravel: '150 mm'
      },
      standardAccessories: [
        'Face Plate',
        'Chuck Plate',
        'Steady Rest',
        'Follow Rest',
        'Motor Pulley',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key'
      ]
    },
    {
      id: '10-feet-heavy-duty-lathe-machines',
      name: '10 Feet Heavy Duty Lathe Machines',
      price: '₹ 2,74,000',
      priceNumeric: 274000,
      brochure: 'https://pdf.indiamart.com/impdf/25954319288/718658/10-feet-heavy-duty-lathe-machines.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/FF/LU/KG/718658/10-feet-heavy-duty-lathe-machines-500x500.jpg',
      specs: {
        swingOverBed: '455 mm',
        distanceBetweenCenters: '2000 mm',
        bedLength: '10 Feet',
        spindleBore: '104 mm',
        spindleSpeedRange: '25-500 RPM',
        motorPower: '2 HP',
        heightOfCentre: '254 mm',
        applicableIndustry: 'Power Plant, Oil Industry, Mining, Tool Room, Sugar Mills, Shipbuilding, Textile, Paper Mills, Steel Rolling Mills',
        bedWidth: '325 mm',
        machineType: 'Belt Driven Heavy Duty Lathe Machine',
        numberOfSpindleSpeeds: '8',
        distanceBetweenCentre: '1900 mm',
        swingOverCrossSlide: '285 mm',
        maximumSwingInGap: '775 mm',
        crossSlideTravel: '280 mm',
        leadScrewDiameter: '38mm',
        leadScrewPitch: '4 T.P.I',
        machineCondition: 'New',
        tailStockSpindleTaperBore: 'MT-4',
        countryOrigin: 'Made in India'
      },
      standardAccessories: [
        'Face Plate',
        'Chuck Plate',
        'Steady Rest',
        'Follow Rest',
        'Motor Pulley',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key'
      ]
    },
    {
      id: '7-feet-heavy-duty-lathe-machines-v2',
      name: '7 Feet Heavy Duty Lathe Machines',
      price: '₹ 2,30,000',
      priceNumeric: 230000,
      brochure: 'https://pdf.indiamart.com/impdf/25954336562/718658/7-feet-heavy-duty-lathe-machines.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/TL/FM/KD/718658/7-feet-heavy-duty-lathe-machines-500x500.jpg',
      specs: {
        swingOverBed: '455 mm',
        distanceBetweenCenters: '1000 mm',
        bedLength: '7 Feet',
        spindleBore: '52 mm',
        spindleSpeedRange: '25-500 RPM',
        motorPower: '2 HP',
        heightOfCentre: '254 mm',
        applicableIndustry: 'Oil Industry, Textile, Power Plant, Sugar Mills, Paper Mills, Steel Rolling Mills, Tool Room',
        bedWidth: '325 mm',
        machineType: 'Belt Driven Heavy Duty Lathe Machine',
        distanceBetweenCentre: '2115 mm',
        swingOverCrossSlide: '285 mm',
        maximumSwingInGap: '775 mm',
        crossSlideTravel: '280 mm',
        leadScrewPitch: '4 T.P.I',
        machineCondition: 'New',
        tailStockSpindleTaperBore: 'MT-4',
        countryOrigin: 'Made in India'
      },
      standardAccessories: [
        'Face Plate',
        'Chuck Plate',
        'Steady Rest',
        'Follow Rest',
        'Motor Pulley',
        'Change Gears',
        'Dead Centre',
        'Centre Adapter',
        'Tool Post Key'
      ]
    },
    {
      id: 'industrial-heavy-duty-lathe-machine',
      name: 'Industrial Heavy Duty Lathe Machine',
      price: '₹ 3,51,000',
      priceNumeric: 351000,
      brochure: 'https://pdf.indiamart.com/impdf/2852975370948/718658/industrial-heavy-duty-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/425238545/GF/KN/RJ/718658/lathe-machine-for-sugar-mills-1000x1000.jpg',
      specs: {
        swingOverBed: '455mm',
        distanceBetweenCenters: '2115',
        bedLength: '12 Feet',
        heightOfCentre: '375 mm',
        spindleBore: '104 mm',
        spindleSpeedRange: '25-500 RPM',
        motorPower: '5 hp',
        applicableIndustry: 'Sugar Mills, Power Plant, Paper Mills, Steel Rolling Mills, Tool Room',
        bedWidth: '375mm',
        numberOfSpindleSpeeds: '8',
        machineType: 'Belt Driven Heavy Duty Lathe Machine',
        distanceBetweenCentre: '2115mm',
        maxSwingOverBed: '500 mm'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'sugar-mills-lathe-machine',
      name: 'Sugar Mills Lathe Machine',
      price: '₹ 4,50,000',
      priceNumeric: 450000,
      brochure: 'https://pdf.indiamart.com/impdf/2854225234155/718658/sugar-mills-lathe-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/6/425238547/KB/JD/DI/718658/lathe-machine-for-sugar-mills-1000x1000.jpg',
      specs: {
        latheType: 'Heavy Duty',
        maxSwingOverBed: '1500 mm',
        swingOverBed: '700 mm',
        bedLength: '3655',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        countryOrigin: 'Made in India',
        spindleBore: '150mm',
        heightOfCenter: '450mm',
        widthOfBed: '450mm'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'cone-pulley-lathe',
      name: 'Cone Pulley Lathe',
      price: '₹ 1,30,000',
      priceNumeric: 130000,
      brochure: 'https://pdf.indiamart.com/impdf/2855421679588/718658/cone-pulley-lathe.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/471668989/FP/SR/ZB/718658/cone-pulley-lathe-500x500.jpg',
      specs: {
        latheType: 'Medium Duty',
        maxSwingOverBed: '500 mm',
        swingOverBed: '400 mm',
        bedLength: '1825mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        countryOrigin: 'Made in India',
        spindleBore: '52mm',
        heightOfCenter: '215mm',
        widthOfBed: '275mm'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'heavy-duty-lathe-machines-800rpm',
      name: 'Heavy Duty Lathe Machines (25-800 RPM)',
      price: '₹ 2,17,500',
      priceNumeric: 217500,
      brochure: 'https://pdf.indiamart.com/impdf/2857575038433/718658/heavy-duty-lathe-machines-in-pune.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/548119817/KQ/IY/FZ/718658/heavy-duty-lathe-machines-in-pune-500x500.jpg',
      specs: {
        swingOverBed: '455mm',
        distanceBetweenCenters: '1000 mm',
        bedLength: '7 Feet',
        heightOfCentre: '300 mm',
        spindleBore: '80 mm',
        spindleSpeedRange: '25-800 rpm',
        motorPower: '3 HP',
        applicableIndustry: 'Tool Room, Steel Rolling Mills, Sugar Mills',
        bedWidth: '325mm',
        machineType: 'Belt Driven Heavy Duty Lathe Machine',
        numberOfSpindleSpeeds: '8',
        distanceBetweenCentre: '965mm',
        swingOverCrossSlide: '285mm',
        maximumSwingInGap: '775mm',
        leadScrewDiameter: '38mm'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.'
    },
    {
      id: 'lathe-machine-for-iti-and-engineering-colleges',
      name: 'Lathe Machine For ITI and Engineering Colleges',
      price: '₹ 1,10,000',
      priceNumeric: 110000,
      brochure: 'https://pdf.indiamart.com/impdf/24271044448/718658/lathe-machine-for-iti-and-engineering-colleges.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/11/UD/KK/AU/718658/lathe-machine-for-iti-and-engineering-colleges-500x500.jpg',
      specs: {
        maxSwingOverBed: '500 mm',
        latheType: 'All Geared',
        bedLength: '1825mm',
        swingOverBed: '405 mm',
        spindleBore: '52 mm',
        bedWidth: '275 mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        rangeOfSpindleSpeeds: '1440 RPM',
        modelName: 'UNI-TECH',
        power: '1 Phase',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'cnc-machine',
      name: 'CNC Machine',
      price: '₹ 8,50,000',
      priceNumeric: 850000,
      brochure: 'https://pdf.indiamart.com/impdf/2856268999748/718658/cnc-machine.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2025/3/498199721/PM/RX/WM/718658/cnc-machine-500x500.jpeg',
      specs: {
        machineType: 'CNC',
        xyAxisWorkingArea: '300 x 300 mm',
        numberOfAxes: '3 Axis',
        swingOverBed: '300mm',
        maximumTurningLength: '150mm',
        stdTurningDia: '100mm',
        spindleBore: '50mm',
        speedRange: '50-4500 RPM',
        accuracyPositioning: '0.015 mm',
        accuracyRepeatability: '+-0.003 mm',
        modelNumber: 'UNI-TECH/100'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'heavy-duty-conventional-lathe-800mm',
      name: 'Heavy Duty Conventional Lathe, 800mm Swing Over Bed, 3000mm Bed Length',
      price: '₹ 3,65,000',
      priceNumeric: 365000,
      brochure: 'https://pdf.indiamart.com/impdf/2858473048933/718658/heavy-duty-conventional-lathe-800mm-swing-over-bed-3000mm-bed-length.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2026/1/576751393/XS/DT/TJ/718658/heavy-duty-conventional-lathe-800mm-swing-over-bed-3000mm-bed-length-500x500.jpg',
      specs: {
        latheType: 'Heavy Duty',
        swingOverBed: '800 mm',
        bedLength: '3000 mm',
        spindleBore: '130 mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        machineVoltage: '415 V',
        phase: 'Three Phase',
        usage: 'Job Work'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'heavy-duty-geared-lathe-800mm',
      name: 'Heavy Duty Geared Lathe, 800 mm Swing Over Bed, 4000 mm Bed Length, 200 mm Spindle Bore',
      price: '₹ 6,50,000',
      priceNumeric: 650000,
      brochure: 'https://pdf.indiamart.com/impdf/2858473058473/718658/heavy-duty-geared-lathe-800-mm-swing-over-bed-4000-mm-bed-length-200-mm-spindle-bore.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2026/1/576751076/NU/RR/OP/718658/heavy-duty-geared-lathe-800-mm-swing-over-bed-4000-mm-bed-length-200-mm-spindle-bore-500x500.jpg',
      specs: {
        swingOverBed: '800 mm',
        bedLength: '4000 mm',
        spindleBore: '200 mm',
        spindleSpeed: '20-1200 rpm',
        gearBoxType: 'All Geared',
        bedType: 'Flat Bed',
        feedType: 'Power Feed',
        machineVoltage: '440 V',
        phase: 'Three Phase'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'medium-duty-conventional-lathe-400mm',
      name: 'Medium Duty Conventional Lathe, 400mm Swing Over Bed, 1500mm Bed Length',
      price: '₹ 1,35,000',
      priceNumeric: 135000,
      brochure: 'https://pdf.indiamart.com/impdf/2858473082573/718658/medium-duty-conventional-lathe-400mm-swing-over-bed-1500mm-bed-length.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2026/1/576750499/ZC/QW/EV/718658/medium-duty-conventional-lathe-400mm-swing-over-bed-1500mm-bed-length-500x500.jpg',
      specs: {
        latheType: 'Medium Duty',
        swingOverBed: '400 mm',
        bedLength: '1500 mm',
        spindleBore: '52 mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        machineVoltage: '415 V',
        phase: 'Three Phase',
        usage: 'Workshop, Job Work'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'heavy-duty-conventional-lathe-700mm',
      name: 'Heavy Duty Conventional Lathe, 700mm Swing Over Bed, 3000mm Bed Length',
      price: '₹ 3,50,000',
      priceNumeric: 350000,
      brochure: 'https://pdf.indiamart.com/impdf/2858473031712/718658/heavy-duty-conventional-lathe-700mm-swing-over-bed-3000mm-bed-length.pdf',
      image: 'https://5.imimg.com/data5/SELLER/Default/2026/1/576750106/ZV/RO/VF/718658/heavy-duty-conventional-lathe-700mm-swing-over-bed-3000mm-bed-length-500x500.jpg',
      specs: {
        latheType: 'Heavy Duty',
        swingOverBed: '700 mm',
        bedLength: '3000 mm',
        spindleBore: '100 mm',
        controlType: 'Conventional',
        bedType: 'Flat And V Bed',
        machineVoltage: '415 V',
        phase: 'Three Phase',
        usage: 'Job Work'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    }
  ],

  // ==================== DRILLING MACHINES (5 Products) ====================
  drilling: [
    {
      id: 'pillar-drilling-machine-25mm',
      name: 'Pillar Drilling Machine (25mm)',
      price: '₹ 28,500',
      priceNumeric: 28500,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      specs: {
        drillingCapacity: '25mm',
        type: 'Pillar',
        spindleSpeed: '70 to 2500 RPM',
        spindleTravel: '150 mm',
        tableSize: 'Round 477mm',
        motorPower: '1 HP',
        numberOfSpindleSpeeds: '8',
        brand: 'Uni-Tech',
        countryOrigin: 'Made in India',
        material: 'Mild Steel',
        voltage: '220 V',
        drillingDiameter: '32 mm',
        spindleSpeeds: '1400 RPM',
        phase: 'Single Phase'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm, engaged in Manufacturer and Exporter high functionality range of Lathe Machine, Slotting Machine, Drilling Machine, Hydraulic Press, Shaping Machine, Universal Milling Machine etc.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'radial-drilling-machine-40mm',
      name: 'Radial Drilling Machine (40mm)',
      price: '₹ 1,18,500',
      priceNumeric: 118500,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      specs: {
        drillingCapacity: '40 mm',
        type: 'Radial',
        spindleSpeed: '1440 RPM',
        spindleTravel: '150 mm',
        armLength: '1400 mm',
        tableSize: 'Box table',
        numberOfSpindleSpeeds: '8',
        brand: 'Uni-Tech',
        countryOrigin: 'Made in India',
        drillingDiameter: '65 mm',
        voltage: '440 V',
        automaticGrade: 'Automatic',
        phase: 'Three Phase'
      },
      use: 'For different function such as drilling, boring, spot facing, screwing reaming, counter boring and tapping.',
      features: ['Sturdy construction', 'Excellent performance', 'Superior functionality'],
      priceRange: 'Rs 60000 to 1 Lakh'
    },
    {
      id: 'radial-drill-machine-25mm',
      name: 'Radial Drill Machine (25mm)',
      price: '₹ 70,000',
      priceNumeric: 70000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      specs: {
        drillingDiameter: '25 mm',
        type: 'Radial',
        drillingCapacity: '25 mm',
        spindleSpeed: '105 x 2651 x 8 RPM',
        spindleTravel: '205 mm',
        armLength: '1200 mm',
        tableSize: 'Box table',
        numberOfSpindleSpeeds: '8',
        automaticGrade: 'Semi-Automatic, Manual, Automatic',
        holeDiameter: '0-25 mm, 25-50 mm',
        numberOfShaft: '3.0',
        distanceBetweenSpindleAndBasePlate: '25 mm',
        modelName: 'UNITECH - 25 mm',
        brand: 'UNITECH',
        countryOrigin: 'Made in India'
      },
      use: 'For different function such as drilling, boring, spot facing, screwing reaming, counter boring and tapping.',
      features: ['Sturdy construction', 'Excellent performance', 'Superior functionality'],
      priceRange: 'Rs 60000 to 1 Lakh'
    },
    {
      id: 'pillar-drill-machine-25mm',
      name: 'Pillar Drill Machine (25mm)',
      price: '₹ 24,100',
      priceNumeric: 24100,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      specs: {
        drillingCapacity: '25 mm',
        spindleSpeed: '86 to 3360 RPM',
        spindleTravel: '25 mm',
        motorPower: '1 HP',
        numberOfSpindleSpeeds: '8',
        tableSize: '260 x 260 mm',
        power: '3 Phase',
        rangeOfSpindleSpeed: '86 to 3360 RPM',
        machineType: 'Manual, Semi-Automatic, Automatic',
        brand: 'UNI-TECH',
        baseSize: '86 to 3360 RPM',
        modelName: 'UNITECH - 20 mm'
      },
      use: 'For drilling accurate holes through materials such as woods, plastics and metals.',
      features: ['Optimum performance', 'High operational fluency', 'Low power consumption'],
      priceRange: 'Rs 15000 to 5 Lakh'
    },
    {
      id: 'bench-drilling-machine-13mm',
      name: 'Bench Drilling Machine (13mm)',
      price: '₹ 12,500',
      priceNumeric: 12500,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      specs: {
        drillingCapacityInSteel: '13 mm (1/2 in)',
        drillingDiameter: '13 mm',
        motorPower: '0.5 HP',
        spindleTravel: '80 mm',
        numberOfSpeeds: '4',
        spindleCenterToColumnDistance: '300 mm',
        drillingCapacity: '13mm',
        weight: '45kgs.',
        columnDiameter: '46.80mm',
        countryOrigin: 'Made in India',
        spindleSpeedRPM: '500 to 2825 RPM',
        columnLength: '940mm',
        sizeOfWorkingTableSquare: '210 x 215mm',
        maxDistanceSpindleToTable: '310mm',
        maxDistanceSpindleToBase: '495mm'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.'
    },
    {
      id: 'heavy-drilling-machine-25mm',
      name: 'Heavy Drilling Machine (25mm)',
      price: '₹ 35,000',
      priceNumeric: 35000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      specs: {
        drillingCapacityInSteel: '25 mm (1 inch)',
        duty: 'Heavy Duty',
        machineType: 'Pillar',
        motorPower: '2 HP',
        headType: 'Cone Pulley',
        spindleTaper: 'MT-3',
        spindleTravel: '250 mm',
        pillarDiameter: '100 mm',
        powerSupply: '3 Phase'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    }
  ],

  // ==================== SLOTTTING MACHINES (5 Products) ====================
  slotting: [
    {
      id: 'slotting-machine-150mm',
      name: '150 Mm Slotting Machine',
      price: '₹ 62,100',
      priceNumeric: 62100,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/DE/AQ/XW/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        application: 'Metal',
        machineType: 'Semi Automatic',
        maxWorkSize: '24 in',
        material: 'Mild Steel',
        powerSource: 'Electric',
        motorPower: '2 hp',
        phase: 'Single Phase',
        size: '10 Inch',
        ramAdjustment: 'Yes',
        countryOrigin: 'Made in India',
        crossMovement: '110 mm',
        brand: 'Uni-Tech',
        ramAdjustments: '150 mm',
        speedAdjustment: '3 Speed',
        adjustmentStrock: '10 mm to 150 mm',
        noOfHP: '1 HP',
        longitudinalMovement: '200 mm',
        voltage: '220 V'
      },
      productDetails: {
        '150 MM (6")': {
          A: '210 MM',
          B: '310 MM',
          C: '280 MM X 335 MM'
        }
      },
      standardAccessories: ['Boring Bar', 'Motor Pulley', 'Counter V – Belt'],
      extraAccessories: ['Rotary Table With 36:1', 'Dielectric Motor', 'Thru Chuck', 'V – Belt']
    },
    {
      id: 'slotting-machine-250mm',
      name: '250 Mm Slotting Machine',
      price: '₹ 75,000',
      priceNumeric: 75000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/DE/AQ/XW/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        application: 'Metal',
        machineType: 'Manual',
        maxWorkSize: '24 in',
        material: 'Mild Steel',
        powerSource: 'Electric',
        motorPower: '2 hp',
        phase: 'Single Phase',
        size: '10 Inch',
        ramAdjustment: 'Yes',
        countryOrigin: 'Made in India',
        brand: 'Uni-Tech',
        motorHP: '1.5 HP',
        ramAdjustments: '250 mm',
        speedAdjustment: '3 Speed',
        adjustmentStrock: '10 mm to 250 mm',
        longitudinalMovement: '230 mm',
        voltage: '220 V'
      },
      productDetails: {
        '250 MM (10")': {
          A: '330 MM',
          B: '410 MM',
          C: '280 MM X 335 MM'
        }
      },
      standardAccessories: ['Boring Bar', 'Motor Pulley', 'Counter V – Belt'],
      extraAccessories: ['Rotary Table With 36:1 Ratio Diameter 250 Mm', 'Dielectric Motor', 'Thru Chuck', 'V – Belt']
    },
    {
      id: 'heavy-duty-slotting-machine',
      name: 'Heavy Duty Slotting Machine',
      price: '₹ 78,000',
      priceNumeric: 78000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/DE/AQ/XW/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        application: 'Metal',
        machineType: 'Manual',
        maxWorkSize: '24 in',
        material: 'Mild Steel',
        powerSource: 'Electric',
        motorPower: '2 hp',
        phase: 'Single Phase',
        size: '10 Inch',
        ramAdjustment: 'Yes',
        countryOrigin: 'Made in India',
        crossMovement: '300 mm',
        brand: 'Uni-Tech',
        motorHP: '2.5 HP',
        speedAdjustment: '3 Speed',
        voltage: '220 V'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.'
    },
    {
      id: 'rotary-slotting-machine',
      name: 'Rotary Slotting Machine',
      price: '₹ 78,000',
      priceNumeric: 78000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/DE/AQ/XW/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        machineType: 'Semi Automatic',
        maxSlotDepth: '250 mm',
        phase: '3 Phase',
        size: '10\'\'',
        brand: 'Uni-Tech',
        countryOrigin: 'Made in India',
        powerSource: '1440 RPM',
        usageApplication: 'Key Way Purpose',
        type: 'Slotting Machine'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.'
    },
    {
      id: 'ms-slotting-machine',
      name: 'MS Slotting Machine',
      price: '₹ 71,600',
      priceNumeric: 71600,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/DE/AQ/XW/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        machineType: 'Semi Automatic',
        size: '6 Inch',
        material: 'Mild Steel',
        phase: '3 Phase',
        ramAdjustment: 'Yes',
        automationGrade: 'yes',
        packagingSpeed: '1440 rpm',
        powerConsumption: '1.5 H.P.',
        productionCapacity: '250 mm',
        brand: 'UNI-TECH',
        countryOrigin: 'Made in India',
        usageApplication: 'Key Way Purpose',
        type: 'Slotting Machine'
      },
      productDetails: {
        capacity: {
          '150 mm (6")': { adjustmentStroke: '10 mm TO 150 mm', longitudinalMovement: '200 mm', crossMovement: '110 mm', speedAdjustment: '3 Speed', ramAdjustment: '150 mm', electricMotor: '1 H.P.' },
          '250 mm (10")': { adjustmentStroke: '10 mm TO 250 mm', longitudinalMovement: '230 mm', crossMovement: '230 mm', speedAdjustment: '3 Speed', ramAdjustment: '250 mm', electricMotor: '1.5 H.P.' }
        }
      },
      standardAccessories: ['Boring Bar', 'Motor Pulley', 'Counter V – Belt'],
      features: ['Sturdy design', 'Optimum performance', 'Long working life'],
      priceRange: 'Rs 50000 to 20 Lakh'
    }
  ],

  // ==================== HYDRAULIC PRESS (4 Products) ====================
  hydraulic: [
    {
      id: 'semi-automatic-hydraulic-press-50ton',
      name: 'Semi Automatic Hydraulic Press (50 Ton)',
      price: '₹ 99,000',
      priceNumeric: 99000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/WV/XB/ID/718658/heavy-duty-plano-type-lathe-machine-500x500.jpg',
      specs: {
        pressCapacity: '50 ton',
        frameType: 'H Frame',
        operationMode: 'Semi Automatic',
        modelName: 'UT 50',
        workingType: 'Single Action',
        material: 'Mild Steel',
        voltage: '440 V',
        tableSize: '1200×1000 mm',
        cylinderStroke: '300 mm',
        brand: 'Uni-Tech',
        automationGrade: 'Semi Automatic',
        maxForceOrLoad: '30-60 ton',
        controlType: 'Non-CNC',
        capacity: '25 Ton',
        frequency: '50 Hz',
        surfaceFinishing: 'Paint Coated',
        countryOrigin: 'Made in India',
        phase: 'Three Phase'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'hand-operated-hydraulic-press-25ton',
      name: 'Hand Operated Hydraulic Press (25 Ton)',
      price: '₹ 1,20,500',
      priceNumeric: 120500,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/WV/XB/ID/718658/heavy-duty-plano-type-lathe-machine-500x500.jpg',
      specs: {
        tonnageCapacity: '25 ton',
        frameType: 'H Frame',
        operationType: 'Hand Pump',
        modelName: 'UT 60',
        automationGrade: 'Manual',
        workingStroke: '200 mm',
        material: 'Mild Steel',
        tableSize: '400×400 mm',
        bedHeight: '1000 mm',
        brand: 'Uni-Tech',
        controlType: 'Non CNC',
        countryOrigin: 'Made in India',
        surfaceFinishing: 'Paint Coated',
        feature: 'Rust Proof'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    },
    {
      id: 'hydraulic-power-press-5ton',
      name: 'Hydraulic Power Press Small Size (5 Ton)',
      price: '₹ 42,000',
      priceNumeric: 42000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/WV/XB/ID/718658/heavy-duty-plano-type-lathe-machine-500x500.jpg',
      specs: {
        capacity: '5 Ton',
        machineType: 'H-Frame',
        controlType: 'Non-CNC',
        modelName: 'UT-5',
        material: 'Mild Steel',
        tableSize: '500x450 mm',
        daylight: '400 mm',
        usageApplication: 'Industrial',
        maxForceOrLoad: '0-30 ton',
        automationGrade: 'Semi Automatic',
        color: 'POWDER COTTING',
        brand: 'UNI-TECH'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 50,000 to 10 Lakh'
    },
    {
      id: 'hydraulic-press-small-hand-operated-5ton',
      name: 'Hydraulic Press Small Size Hand Operated (5 Ton)',
      price: '₹ 38,300',
      priceNumeric: 38300,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/3/WV/XB/ID/718658/heavy-duty-plano-type-lathe-machine-500x500.jpg',
      specs: {
        tonnageCapacity: '5 ton',
        maxForceOrLoad: '0-30 ton',
        frameType: 'H Frame',
        operationType: 'Hand Pump',
        modelName: 'UT-5 TON',
        workingStroke: '200 mm',
        material: 'Mild Steel',
        tableSize: '300×300 mm',
        bedHeight: '500 mm',
        usageApplication: 'Manual',
        brand: 'UNI-TECH',
        controlType: 'Non-CNC',
        color: 'POWDER COTTING',
        countryOrigin: 'Made in India',
        capacity: '5 TON'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 50,000 to 10 Lakh'
    }
  ],

  // ==================== METAL CUTTING BANDSAW (3 Products) ====================
  bandsaw: [
    {
      id: 'metal-cutting-bandsaw-machine-300mm',
      name: 'Metal Cutting Bandsaw Machine (300mm)',
      price: '₹ 1,51,000',
      priceNumeric: 151000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/HE/IB/MZ/718658/all-geared-high-speed-lathe-machine-500x500.jpg',
      specs: {
        cuttingCapacity: '300 mm',
        sizeDimension: '300mm',
        machineType: 'Horizontal',
        bladeSize: '3760x34x1.1',
        materialCut: 'Mild Steel',
        automationGrade: 'Manual',
        motorPower: '2 HP',
        voltage: '440',
        capacity: '300mm',
        usageApplication: 'Industrial',
        material: 'Cast Iron',
        machineWeight: '770 kgs.',
        brand: 'UNI-TECH',
        squareCutting: '275mm',
        modelName: 'UT-300mm',
        power: '3 Phase',
        roundCutting: '300mm',
        bladeSpeed: '20-35-55-75',
        dimensionsLWH: '2400 x 930 x 1050 mm',
        mainMotorPower: '3 Phase',
        coolantMotor: '0.15 H.P',
        coolantPump: '0.15 HP',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'We have reached the pinnacle of success and earned a reputed name by manufacturing and supplying high quality range of Horizontal Metal Cutting Bandsaw Machine. Metal Cutting Bandsaw Machine is a specialized type of machine used for cutting metal, primarily steel and stainless steel.'
    },
    {
      id: 'horizontal-band-saw-machine-200mm',
      name: 'Horizontal Band Saw Machine (200mm)',
      price: '₹ 70,000',
      priceNumeric: 70000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/HE/IB/MZ/718658/all-geared-high-speed-lathe-machine-500x500.jpg',
      specs: {
        sizeDimension: '200mm',
        cuttingCapacity: '200 mm',
        automationGrade: 'Manual',
        bladeSize: '3000x27x0.9',
        usageApplication: 'Industrial',
        materialCut: 'Stainless Steel, Brass, Aluminium, Mild Steel, Alloy Steel, Cast Iron, Copper',
        motorPower: '1.5 HP',
        coolantSystem: 'With Coolant',
        modelName: 'UT-200mm',
        capacity: '200mm',
        brand: 'UNI-TECH',
        voltage: '440 volt',
        materialGrade: 'CI CASTING',
        power: '3 Phase',
        bladeSpeed: '25-35-55-75',
        dimensionsLWH: '1630 x 750 x 870 mm',
        coolantPump: '0.15 HP',
        countryOrigin: 'Made in India'
      },
      companyInfo: 'We have reached the pinnacle of success and earned a reputed name by manufacturing and supplying high quality range of Horizontal Metal Cutting Bandsaw Machine. We specialize in cutting metal such as cast iron.'
    },
    {
      id: 'band-saw-machine-300mm',
      name: 'Band Saw Machine (300mm)',
      price: '₹ 1,50,000',
      priceNumeric: 150000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/HE/IB/MZ/718658/all-geared-high-speed-lathe-machine-500x500.jpg',
      specs: {
        machineType: 'Horizontal',
        bandSawOrientation: 'Horizontal',
        cuttingCapacity: '300 mm',
        cuttingCapacitySquare: '12 inch',
        materialCut: 'Mild Steel',
        power: '1.5 kW',
        automationGrade: 'Manual',
        noLoadSpeed: '1440 rpm',
        motorPower: '2 HP',
        capacity: '12 Inch',
        material: 'Mild Steel',
        bladeSize: '3760 x 34 x 1.1 mm',
        brand: 'uni-tech',
        capacityInMmRound: '300 mm',
        capacityInMmSqure: '275 mm',
        bladeDimInMm: '3760 x 34 x 1.1',
        bladeSpeedMmin: '20-35-55-75',
        netWeightKgs: '770kgs.',
        cuttingCapacityRound: '10 inch'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm.'
    }
  ],

  // ==================== SHAPING MACHINES (3 Products) ====================
  shaping: [
    {
      id: 'semi-automatic-shaping-machine',
      name: 'Semi Automatic Shaping Machine',
      price: '₹ 1,56,000',
      priceNumeric: 156000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/DE/AQ/XW/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        maxStrokeLength: '600 mm',
        tableSize: '483 x 330 mm',
        automaticGrade: 'Semi Automatic',
        mainMotorPower: '3 kW',
        automationGrade: 'Semi-Automatic',
        material: 'Mild Steel',
        speed: '1440 RPM',
        brand: 'Uni-Tech',
        countryOrigin: 'Made in India',
        weight: '1750 Kg',
        overallDimensionLWH: '1980 x 1067 x 1600 mm',
        noOfHP: '2 HP',
        vBelt: 'B-55',
        mainSwitchStarter: 'R & F Switch',
        diaOfClutchPulley: '318 mm',
        conePulleyBelt: '3 nos.',
        rangeOfTableFeedPerStroke: '0.229',
        rangeOfRamSpeedsInStrokesPerMinute: '12-24-48-72 Minute',
        lengthWidthOfBase: '1630 mm x 610 mm'
      },
      productDetails: {
        capacity: {
          lengthOfRam: '1245 mm',
          lengthOfRamStroke: '610 mm',
          lengthWidthOfRamBearing: '915 mm x 279 mm',
          maxDistanceOfTableToRam: '457 mm',
          minDistanceOfTableToRam: '89 mm'
        },
        table: {
          workingSurfaceOfTable: '483 mm x 330 mm',
          maxTableTravelHorizontal: '610 mm',
          maxTableTravelVertical: '406 mm',
          angularMovementOfTableOnEitherSides: '60 L 60 R'
        },
        toolHead: {
          maxSizeOfToolShankAccommodated: '51 mm x 21 mm',
          maxVerticalTravelOfToolSide: '152 mm',
          maxSwivelOfToolHead: '60 L 60 R'
        }
      },
      standardAccessories: ['Vice', 'Handle', 'Lubrication System'],
      optionalAccessories: ['Electric Motor', 'V-Belt', 'R & F Switch']
    },
    {
      id: 'industrial-shaping-machines-24inch',
      name: 'Industrial Shaping Machines (24")',
      price: '₹ 2,55,000',
      priceNumeric: 255000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/DE/AQ/XW/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        maxStrokeLength: '600 mm',
        tableSize: '483 x 330 mm',
        modelName: 'SHAPING - 24\'\'',
        size: '24\'\'',
        drivenType: 'Electric',
        material: 'Metal, Mild Steel',
        automationGrade: 'Semi-Automatic',
        automaticGrade: 'Manual'
      },
      use: 'Widely used as a cutting tool for metal workpieces.',
      features: ['Long functional life', 'Robustness', 'Enhanced service life'],
      priceRange: 'Rs 50000 to 20 Lakh'
    },
    {
      id: 'gear-shaping-machine',
      name: 'Gear Shaping Machine',
      price: '₹ 2,25,000',
      priceNumeric: 225000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/DE/AQ/XW/718658/uni-tech-geared-lathes-500x500.jpg',
      specs: {
        maxGearDiameter: '300 mm',
        drillingDiameter: '25 mm',
        maxModule: '2 module',
        type: 'Drilling Machine (Radial)',
        modelName: 'SHAPING - 24\'\'',
        capacity: 'High',
        size: '24\'\'',
        drivenType: 'Electric',
        material: 'Mild Steel',
        machineWeight: '2000 Kgs.',
        electricMotor: '3 Phase',
        automationGrade: 'Manual',
        automaticGrade: 'Semi Automatic'
      },
      productDetails: {
        capacity: {
          lengthOfRam: '1245 mm',
          lengthOfRamStroke: '610 mm',
          lengthWidthOfRamBearing: '915 mm x 279 mm',
          maxDistanceOfTableToRam: '457 mm',
          minDistanceOfTableToRam: '89 mm'
        },
        table: {
          workingSurfaceOfTable: '483 mm x 330 mm',
          maxTableTravelHorizontal: '610 mm',
          maxTableTravelVertical: '406 mm',
          angularMovementOfTableOnEitherSides: '60 L 60 R'
        },
        toolHead: {
          maxSizeOfToolShankAccommodated: '51 mm x 21 mm',
          maxVerticalTravelOfToolSide: '152 mm',
          maxSwivelOfToolHead: '60 L 60 R'
        },
        speedsFeeds: {
          diaOfClutchPulley: '318 mm',
          conePulleyBelt: '3 nos.',
          noOfSpeed: '4',
          rangeOfRamSpeedsInStrokesPerMinute: '12-24-48-72',
          rangeOfTableFeedPerStroke: '0.229'
        },
        driveElectrical: {
          electrical: '2 H. P.',
          speedRPM: '1440 RPM',
          vBelt: 'B-55',
          mainSwitchStarter: 'R & F Switch'
        }
      },
      standardAccessories: ['Vice', 'Handle', 'Lubrication System'],
      optionalAccessories: ['Electric Motor', 'V-Belt', 'R & F Switch'],
      overallDimension: '1980 X 1067 X 1600',
      features: ['Less maintenance', 'Low power consumption', 'Hassle free operations'],
      priceRange: 'Rs 50000 to 10 Lakh'
    }
  ],

  // ==================== MILLING MACHINES (1 Product) ====================
  milling: [
    {
      id: 'turret-milling-machine-m1tr',
      name: 'Turret Milling Machine M1TR Type - with DRO - Heavy Duty Industrial Milling',
      price: '₹ 3,25,000',
      priceNumeric: 325000,
      brochure: 'https://4.imimg.com/data4/BG/SE/MY-718658/heavy-duty-lathe-machine-500x500.jpg',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/HE/IB/MZ/718658/all-geared-high-speed-lathe-machine-500x500.jpg',
      specs: {
        tableSize: '10 x 50 inch',
        spindleTaper: 'ISO 40',
        digitalReadout: 'Yes',
        numberOfPowerFeed: '3',
        zAxisGuideWay: 'Dovetail',
        power: '3 kw',
        spindleSpeed: '4500 rpm',
        tableWidth: '250 mm',
        tableLength: '1200 mm',
        machineType: 'Turret'
      },
      companyInfo: 'Incepted in the year 1986, we "Uni-Tech Machines" are the reputed Sole Proprietorship firm, engaged in Manufacturer and Exporter high functionality range of Lathe Machine, Slotting Machine, Drilling Machine, Hydraulic Press, Shaping Machine, Universal Milling Machine etc.',
      features: ['Optimum performance', 'High efficiency', 'Long working life'],
      priceRange: 'Rs 1 Lakh to 10 Lakh'
    }
  ]
};

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = MACHINES_DATA;
}