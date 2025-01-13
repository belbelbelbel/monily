// index.ts (constants file)
import React from 'react';  // Add this import if needed
import { GrStatusGood, GrSecure } from 'react-icons/gr';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { FaWallet } from 'react-icons/fa';

export const FeaturesArray = [
  {
    icon: GrStatusGood,
    bgColor: 'F3F7FF',
    title: 'Instant Payments',
    description: 'Send money to friends or family in real-time, for free.',
  },
  {
    icon: RiSecurePaymentLine ,
    bgColor: 'FBF6EF',
    title: 'No hidden fees',
    description: 'Clear and simple pricing. Always be aware of your costs.',
  },
  {
    icon: FaWallet ,
    bgColor: 'EAF8FD',
    title: 'Digital Wallet',
    description: 'Store money securely and make fast transfers or purchases.',
  },
  {
    icon: GrSecure ,
    bgColor: 'F4EDFC',
    title: 'Secure transactions',
    description: 'End-to-end encryption for all transactions.',
  },
];

export const imageArray = [
    { src: "/newtelegraph.jpeg", id: 1, alt: "Newtelegraph" },
    { src: "/sun.png", id: 2, alt: "sun" },
    { src: "/peopledaily.png", id: 3, alt: "QuidaxImg" },  
    { src: "/taja.jpeg", id: 4, alt: "DivestImg" },
]