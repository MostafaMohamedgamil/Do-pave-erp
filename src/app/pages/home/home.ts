import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  cards = [
    {
      icon: 'src/assets/images/icon1.png',
      title: 'Finance  & Accounting',
      description:
        'Manage invoices, payments, expenses, and financial reports with real-time accuracy.',
    },
    {
      icon: 'assets/images/icon1.png',
      title: 'HR & Payroll',
      description:
        'Handle attendance, payroll, contracts, deductions, and employee performance smoothly.',
    },
    {
      icon: 'assets/images/icon1.png',
      title: 'Inventory Management',
      description: 'Track stock levels, transfers, and SKU movement across all warehouses.',
    },
    {
      icon: 'assets/images/icon1.png',
      title: 'Sales & CRM',
      description: 'Manage leads, clients, sales pipelines, and quotations from one place.',
    },
    {
      icon: 'assets/images/icon1.png',
      title: 'Procurement',
      description: 'Deliver every project on time with precision and attention to detail.',
    },
    {
      icon: 'assets/images/icon1.png',
      title: 'Projects & Tasks',
      description: 'Plan, assign, and track projects with timeline views and real-time updates.',
    },
    {
      icon: 'assets/images/icon1.png',
      title: 'Asset Management',
      description: 'Record company assets, track maintenance, and monitor asset lifecycle.',
    },
    {
      icon: 'assets/images/icon1.png',
      title: 'Reports & Insights',
      description: 'Generate financial, operational, and HR reports for data-driven decisions.',
    },
  ];
}
