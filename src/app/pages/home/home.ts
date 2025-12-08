import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  toggleState: boolean[] = [];
  faqItems = [
    {
      id: 1,
      icon: 'images/icons/icon1.png',
      question: 'What is FULL ERP?',
      answer:
        'FULL ERP is a comprehensive enterprise resource planning system designed to help businesses manage accounting, HR, operations, inventory, and workflows in one unified platform.',
    },
    {
      id: 2,
      icon: 'images/icons/icon1.png',
      question: 'How does FULL ERP help my business?',
      answer:
        'FULL ERP streamlines your business processes by automating daily tasks, providing real-time insights, and connecting all your teams in one place. This helps you make smarter decisions and scale your business efficiently.',
    },
    {
      id: 3,
      icon: 'images/icons/icon1.png',
      question: 'Can I integrate FULL ERP with other tools?',
      answer:
        'Yes, FULL ERP offers extensive integration capabilities, allowing you to connect with the tools you already use. This ensures all your systems are synchronized in real time.',
    },
    {
      id: 4,
      icon: 'images/icons/icon1.png',
      question: 'Is FULL ERP suitable for small businesses?',
      answer:
        'Absolutely! FULL ERP offers flexible pricing plans tailored for businesses of all sizes, from individuals and small teams to large enterprises.',
    },
    {
      id: 5,
      icon: 'images/icons/icon1.png',
      question: 'What kind of support do you offer?',
      answer:
        'We provide comprehensive support including documentation, training resources, and dedicated customer support to ensure you get the most out of FULL ERP.',
    },
  ];

  cards = [
    {
      icon: 'images/icon1.png',
      title: 'Finance  & Accounting',
      description:
        'Manage invoices, payments, expenses, and financial reports with real-time accuracy.',
    },
    {
      icon: 'images/icon1.png',
      title: 'HR & Payroll',
      description:
        'Handle attendance, payroll, contracts, deductions, and employee performance smoothly.',
    },
    {
      icon: 'images/icon1.png',
      title: 'Inventory Management',
      description: 'Track stock levels, transfers, and SKU movement across all warehouses.',
    },
    {
      icon: 'images/icon1.png',
      title: 'Sales & CRM',
      description: 'Manage leads, clients, sales pipelines, and quotations from one place.',
    },
    {
      icon: 'images/icon1.png',
      title: 'Procurement',
      description: 'Deliver every project on time with precision and attention to detail.',
    },
    {
      icon: 'images/icon1.png',
      title: 'Projects & Tasks',
      description: 'Plan, assign, and track projects with timeline views and real-time updates.',
    },
    {
      icon: 'images/icon1.png',
      title: 'Asset Management',
      description: 'Record company  track maintenance, and monitor asset lifecycle.',
    },
    {
      icon: 'images/icon1.png',
      title: 'Reports & Insights',
      description: 'Generate financial, operational, and HR reports for data-driven decisions.',
    },
  ];
  toggleAccordion(index: number, isOpen: boolean) {
    this.toggleState[index] = isOpen;
  }
}
