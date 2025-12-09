import { Component } from '@angular/core';

@Component({
  selector: 'app-full-erp',
  standalone: false,
  templateUrl: './full-erp.html',
  styleUrl: './full-erp.scss',
})
export class FullErp {
  erp = [
    {
      imgSrc: 'images/icons/icon23.png',
      altText: 'PMS icon',
      title: 'PMS',
      description: 'Streamline projects and collaborate with ease using our PMS.',
    },
    {
      imgSrc: 'images/icons/icon24.png',
      altText: 'Contacts icon',
      title: 'Contacts',
      description: 'Effortlessly manage and organize your contact data.',
    },
    {
      imgSrc: 'images/icons/icon25.png',
      altText: 'Purchase Order icon',
      title: 'Purchase Order',
      description: 'Simplify and track your purchases with ease.',
    },
    {
      imgSrc: 'images/icons/icon26.png',
      altText: 'Employee Management icon',
      title: 'Employee Management',
      description: 'Manage and track employee data, KPIs, and performance..',
    },
    ////
    {
      imgSrc: 'images/icons/icon27.png',
      altText: 'Inventory icon',
      title: 'Inventory',
      description: 'Stay on top of your stock levels with efficient inventory management.',
    },
    {
      imgSrc: 'images/icons/icon28.png',
      altText: 'Recruitment icon',
      title: 'Recruitment',
      description: 'Simplify hiring and find the best talent faster',
    },
    {
      imgSrc: 'images/icons/icon29.png',
      altText: 'Sales Management icon',
      title: 'Sales Management',
      description: 'Manage your sales cycle from leads to invoices effortlessly.',
    },
    {
      imgSrc: 'images/icons/icon30.png',
      altText: 'Blog Management icon',
      title: 'Blog Management',
      description: 'Create and manage your blogs with an easy content system.',
    },
    {
      imgSrc: 'images/icons/icon31.png',
      altText: 'Product Management icon',
      title: 'Product Management',
      description: 'Organize, update, and control your product catalog.',
    },
    {
      imgSrc: 'images/icons/icon32.png',
      altText: 'Time Off Management icon',
      title: 'Time Off Management',
      description: 'Track leaves, manage holidays, and approvals',
    },
    {
      imgSrc: 'images/icons/icon33.png',
      altText: 'Website Management icon',
      title: 'Website Management',
      description: 'Build and update your entire website from one place',
    },
    {
      imgSrc: 'images/icons/icon34.png',
      altText: 'Invoice Management icon',
      title: 'Invoice Management',
      description: 'Manage billing, payments, and invoice history.',
    },
  ];
}
