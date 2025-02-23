// Helper function to format currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

// Helper function to format date
const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
};

// Generate invoice number
const generateInvoiceNumber = () => {
  const date = new Date();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}-${random}`;
};

// Generate invoice HTML
const generateInvoiceHTML = (data) => {
  const pitmanAmount = data.pitmanHours * data.hourlyRate;
  const idlerAmount = data.idlerHours * data.hourlyRate;
  const subtotal = pitmanAmount + idlerAmount;
  const salesTax = subtotal * data.salesTaxRate;
  const total = subtotal + salesTax;

  return `
    <div class="invoice">
      <div class="invoice-header">
        <div class="from-info">
          <h2>From:</h2>
          <p><strong>${data.fromName}</strong><br>
          ${data.fromAddress}<br>
          ${data.fromPhone}<br>
          ${data.fromEmail}</p>
        </div>
        
        <div class="customer-info">
          <h2>Bill To:</h2>
          <p><strong>${data.customerName}</strong><br>
          ${data.customerAddress}<br>
          ${data.customerPhone}<br>
          ${data.customerEmail}</p>
        </div>

        <div class="insurance-info">
          <h2>Insurance:</h2>
          <p>${data.insuranceCompany}<br>
          ${data.insuranceAddress}</p>
        </div>

        <div class="invoice-details">
          <p><strong>Invoice Date:</strong> ${formatDate(new Date())}<br>
          <strong>Invoice Number:</strong> ${data.invoiceNumber}</p>
        </div>
      </div>

      <h3>Description of Services:</h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Pitman Arm Removal and Installation</td>
            <td>${data.pitmanHours} Hours</td>
            <td>${formatCurrency(data.hourlyRate)}/Hour</td>
            <td>${formatCurrency(pitmanAmount)}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Idler Arm Removal and Installation</td>
            <td>${data.idlerHours} Hours</td>
            <td>${formatCurrency(data.hourlyRate)}/Hour</td>
            <td>${formatCurrency(idlerAmount)}</td>
          </tr>
        </tbody>
      </table>

      <div class="invoice-totals">
        <p><strong>Subtotal:</strong> ${formatCurrency(subtotal)}</p>
        <p><strong>Sales Tax:</strong> ${formatCurrency(salesTax)}</p>
        <p><strong>Total:</strong> ${formatCurrency(total)}</p>
      </div>

      <div class="invoice-notes">
        <h3>Notes:</h3>
        <ul>
          <li>Services performed on ${data.vehicleInfo}</li>
          ${data.claimNumber ? `<li>Claim Number: ${data.claimNumber}</li>` : ''}
        </ul>

        <h3>Payment Terms:</h3>
        <ul>
          <li>Payment Due Upon Receipt</li>
          <li>Please make checks payable to ${data.customerName}</li>
          <li>All major credit cards accepted</li>
        </ul>

        <p><strong>Thank You for Your Business!</strong></p>
      </div>
    </div>
  `;
};

// Service categories and packages data
const servicesData = {
  "Blue-Collar": {
    "Mechanic": {
      "Standard Vehicle Repair": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Auto Insurance Provider",
        insuranceAddress: "",
        vehicleInfo: "[Year/Make/Model]",
        pitmanHours: 4,
        idlerHours: 1,
        hourlyRate: 85,
        salesTaxRate: 0.08
      },
      "Tire Replacement": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Auto Insurance Provider",
        insuranceAddress: "",
        vehicleInfo: "[Year/Make/Model] - Tire Service",
        pitmanHours: 1,
        idlerHours: 0.5,
        hourlyRate: 65,
        salesTaxRate: 0.08
      },
      "Oil Change Service": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Auto Insurance Provider",
        insuranceAddress: "",
        vehicleInfo: "[Year/Make/Model] - Oil Change",
        pitmanHours: 0.5,
        idlerHours: 0.25,
        hourlyRate: 55,
        salesTaxRate: 0.08
      }
    },
    "Construction": {
      "Room Renovation": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Property Insurance",
        insuranceAddress: "",
        vehicleInfo: "Room Renovation Project",
        pitmanHours: 40,
        idlerHours: 8,
        hourlyRate: 75,
        salesTaxRate: 0.08
      },
      "Concrete Work": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Property Insurance",
        insuranceAddress: "",
        vehicleInfo: "Concrete Installation Project",
        pitmanHours: 16,
        idlerHours: 4,
        hourlyRate: 85,
        salesTaxRate: 0.08
      }
    },
    "Plumbing": {
      "Pipe Repair": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Property Insurance",
        insuranceAddress: "",
        vehicleInfo: "Plumbing Repair",
        pitmanHours: 3,
        idlerHours: 1,
        hourlyRate: 95,
        salesTaxRate: 0.08
      },
      "Water Heater Installation": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Property Insurance",
        insuranceAddress: "",
        vehicleInfo: "Water Heater Installation",
        pitmanHours: 4,
        idlerHours: 1,
        hourlyRate: 110,
        salesTaxRate: 0.08
      }
    },
    "Electrician": {
      "Panel Upgrade": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Property Insurance",
        insuranceAddress: "",
        vehicleInfo: "Electrical Panel Upgrade",
        pitmanHours: 8,
        idlerHours: 2,
        hourlyRate: 125,
        salesTaxRate: 0.08
      },
      "Outlet Installation": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Property Insurance",
        insuranceAddress: "",
        vehicleInfo: "Outlet Installation Project",
        pitmanHours: 2,
        idlerHours: 0.5,
        hourlyRate: 95,
        salesTaxRate: 0.08
      }
    },
    "HVAC": {
      "AC Installation": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Property Insurance",
        insuranceAddress: "",
        vehicleInfo: "AC Unit Installation",
        pitmanHours: 6,
        idlerHours: 2,
        hourlyRate: 115,
        salesTaxRate: 0.08
      },
      "Heating System Repair": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "Property Insurance",
        insuranceAddress: "",
        vehicleInfo: "Heating System Repair",
        pitmanHours: 4,
        idlerHours: 1,
        hourlyRate: 105,
        salesTaxRate: 0.08
      }
    }
  },
  "White-Collar": {
    "Consulting": {
      "Business Strategy": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Business Strategy Consulting Project",
        pitmanHours: 40,
        idlerHours: 10,
        hourlyRate: 250,
        salesTaxRate: 0
      },
      "IT Consulting": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "IT Infrastructure Analysis",
        pitmanHours: 30,
        idlerHours: 8,
        hourlyRate: 200,
        salesTaxRate: 0
      },
      "Marketing Strategy": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Marketing Strategy Development",
        pitmanHours: 25,
        idlerHours: 5,
        hourlyRate: 175,
        salesTaxRate: 0
      }
    },
    "Design": {
      "Graphic Design": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Brand Identity Package",
        pitmanHours: 20,
        idlerHours: 5,
        hourlyRate: 125,
        salesTaxRate: 0
      },
      "Interior Design": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Interior Design Consultation",
        pitmanHours: 15,
        idlerHours: 5,
        hourlyRate: 150,
        salesTaxRate: 0
      }
    },
    "Development": {
      "Web Development": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Custom Website Development",
        pitmanHours: 80,
        idlerHours: 20,
        hourlyRate: 150,
        salesTaxRate: 0
      },
      "Software Engineering": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Custom Software Development",
        pitmanHours: 120,
        idlerHours: 30,
        hourlyRate: 175,
        salesTaxRate: 0
      }
    },
    "Legal": {
      "Contract Review": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Legal Contract Review",
        pitmanHours: 8,
        idlerHours: 2,
        hourlyRate: 350,
        salesTaxRate: 0
      },
      "Legal Consultation": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Legal Consultation Services",
        pitmanHours: 4,
        idlerHours: 1,
        hourlyRate: 300,
        salesTaxRate: 0
      }
    },
    "Financial": {
      "Accounting Services": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Monthly Bookkeeping",
        pitmanHours: 12,
        idlerHours: 3,
        hourlyRate: 125,
        salesTaxRate: 0
      },
      "Financial Planning": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Financial Advisory Services",
        pitmanHours: 10,
        idlerHours: 2,
        hourlyRate: 200,
        salesTaxRate: 0
      }
    },
    "Creative": {
      "Photography": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Professional Photography Session",
        pitmanHours: 6,
        idlerHours: 4,
        hourlyRate: 150,
        salesTaxRate: 0
      },
      "Content Writing": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Content Creation Package",
        pitmanHours: 15,
        idlerHours: 5,
        hourlyRate: 100,
        salesTaxRate: 0
      }
    },
    "Real Estate": {
      "Property Listing": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Real Estate Listing Services",
        pitmanHours: 20,
        idlerHours: 5,
        hourlyRate: 150,
        salesTaxRate: 0
      },
      "Property Management": {
        fromName: "",
        fromAddress: "",
        fromPhone: "",
        fromEmail: "",
        customerName: "",
        customerAddress: "",
        customerPhone: "",
        customerEmail: "",
        insuranceCompany: "",
        insuranceAddress: "",
        vehicleInfo: "Property Management Services",
        pitmanHours: 10,
        idlerHours: 2,
        hourlyRate: 100,
        salesTaxRate: 0
      }
    }
  }
};

// Generate services tab HTML
const generateServicesHTML = () => {
  const categoryList = document.getElementById('categoryList');
  
  Object.entries(servicesData).forEach(([category, subcategories]) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    
    categoryDiv.innerHTML = `
      <div class="category-header">
        ${category}
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
      <div class="category-content">
        ${Object.entries(subcategories).map(([subcat, packages]) => `
          <div class="subcategory">
            <h3>${subcat}</h3>
            ${Object.entries(packages).map(([name, data]) => `
              <div class="package service-item" data-package='${JSON.stringify(data)}'>
                ${name}
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    `;
    
    categoryList.appendChild(categoryDiv);
  });
};

// Toggle services tab
window.toggleServicesTab = () => {
  const tab = document.getElementById('servicesTab');
  tab.classList.toggle('open');
};

// Handle category clicks
document.addEventListener('click', (e) => {
  if (e.target.closest('.category-header')) {
    const category = e.target.closest('.category');
    category.classList.toggle('open');
  }
});

// Handle package selection
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('package')) {
    const packageData = JSON.parse(e.target.dataset.package);
    
    // Populate form fields
    Object.entries(packageData).forEach(([key, value]) => {
      const input = document.getElementById(key);
      if (input) {
        input.value = value;
      }
    });
  }
});

// Initialize services tab
document.addEventListener('DOMContentLoaded', () => {
  generateServicesHTML();
});

// Handle form submission
document.getElementById('invoiceForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    fromName: document.getElementById('fromName').value,
    fromAddress: document.getElementById('fromAddress').value,
    fromPhone: document.getElementById('fromPhone').value,
    fromEmail: document.getElementById('fromEmail').value,
    customerName: document.getElementById('customerName').value,
    customerAddress: document.getElementById('customerAddress').value,
    customerPhone: document.getElementById('customerPhone').value,
    customerEmail: document.getElementById('customerEmail').value,
    insuranceCompany: document.getElementById('insuranceCompany')?.value || '',
    insuranceAddress: document.getElementById('insuranceAddress')?.value || '',
    claimNumber: document.getElementById('claimNumber')?.value || '',
    vehicleInfo: document.getElementById('vehicleInfo').value,
    pitmanHours: parseFloat(document.getElementById('pitmanHours').value) || 0,
    idlerHours: parseFloat(document.getElementById('idlerHours').value) || 0,
    hourlyRate: parseFloat(document.getElementById('hourlyRate').value) || 0,
    salesTaxRate: parseFloat(document.getElementById('salesTaxRate').value) || 0,
    invoiceNumber: generateInvoiceNumber()
  };

  const preview = document.getElementById('invoicePreview');
  preview.innerHTML = generateInvoiceHTML(formData);
  document.getElementById('invoiceActions').style.display = 'flex';
});

// Handle PDF download
document.getElementById('downloadPDF').addEventListener('click', async () => {
  const { jsPDF } = window.jspdf;
  const preview = document.getElementById('invoicePreview');
  
  const canvas = await html2canvas(preview);
  const imgData = canvas.toDataURL('image/png');
  
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('invoice.pdf');
});

// Handle email sending
document.getElementById('sendEmail').addEventListener('click', () => {
  const customerEmail = document.getElementById('customerEmail').value;
  const mailtoLink = `mailto:${customerEmail}?subject=Invoice&body=Please find your invoice attached.`;
  window.location.href = mailtoLink;
});