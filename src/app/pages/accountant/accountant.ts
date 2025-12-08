import { Component } from '@angular/core';

@Component({
  selector: 'app-accountant',
  standalone: false,
  templateUrl: './accountant.html',
  styleUrl: './accountant.scss',
})
export class Accountant {
  accountingCard = [
    { imgSrc: 'images/icons/icon5.png', altText: 'data analysis icon', label: 'Journal Entry' },
    {
      imgSrc: 'images/icons/icon6.png',
      altText: 'Chart of Accounts icon',
      label: 'Chart of Accounts',
    },
    {
      imgSrc: 'images/icons/icon7.png',
      altText: 'Ledger Summary icon',
      label: 'Ledger Summary',
    },
    {
      imgSrc: 'images/icons/icon8.png',
      altText: 'Balance Sheet icon',
      label: 'Balance Sheet',
    },
    {
      imgSrc: 'images/icons/icon9.png',
      altText: 'Team Access icon',
      label: 'Team Access',
    },
    {
      imgSrc: 'images/icons/icon10.png',
      altText: 'Trail Balance icon',
      label: 'Trail Balance',
    },
    {
      imgSrc: 'images/icons/icon11.png',
      altText: 'Financial Reports icon',
      label: 'Financial Reports',
    },

    {
      imgSrc: 'images/icons/icon12.png',
      altText: 'Bills and Invoices icon',
      label: 'Bills and Invoices',
    },
    {
      imgSrc: 'images/icons/icon13.png',
      altText: 'Customizable Invoices icon',
      label: 'Customizable Invoices',
    },
    {
      imgSrc: 'images/icons/icon14.png',
      altText: 'Cash Flow Management icon',
      label: 'Cash Flow Management',
    },
    {
      imgSrc: 'images/icons/icon15.png',
      altText: 'Financial Goals icon',
      label: 'Financial Goals',
    },
    {
      imgSrc: 'images/icons/icon16.png',
      altText: 'Transaction History icon',
      label: 'Transaction History',
    },
    {
      imgSrc: 'images/icons/icon17.png',
      altText: 'Permissions Management icon',
      label: 'Permissions Management',
    },
    {
      imgSrc: 'images/icons/icon18.png',
      altText: 'Budget Planner icon',
      label: 'Budget Planner',
    },
    // {
    //   imgSrc: 'images/icons/icon19.png',
    //   altText: 'Multiple Currencies icon',
    //   label: 'Multiple Currencies',
    // },
    {
      imgSrc: 'images/icons/icon19.png',
      altText: 'Multiple Currencies icon',
      label: 'Multiple Currencies',
    },
    {
      imgSrc: 'images/icons/icon20.png',
      altText: 'Bank Accounts icon',
      label: 'Bank Accounts',
    },
    {
      imgSrc: 'images/icons/icon21.png',
      altText: 'Product Tax icon',
      label: 'Product Tax',
    },
    {
      imgSrc: 'images/icons/icon22.png',
      altText: 'Categories icon',
      label: 'Categories',
    },
  ];
}
