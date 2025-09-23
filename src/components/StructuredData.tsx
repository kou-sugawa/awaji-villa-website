export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "ヴィラ・ハートフル淡路明神",
    "description": "愛犬と過ごす特別なリゾート体験。1日1組限定のペット特化型プライベートヴィラで、バレルサウナと200坪の天然芝をお楽しみください。",
    "url": "https://villa-heartful-awaji.com",
    "telephone": "+81-80-1234-5678",
    "email": "info@villa-heartful.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "明神字西濱645",
      "addressLocality": "淡路市",
      "addressRegion": "兵庫県",
      "postalCode": "656-1501",
      "addressCountry": "JP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.5,
      "longitude": 134.9
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "ペット同伴可",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "バレルサウナ",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "天然芝ドッグラン",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "無料駐車場",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "無料Wi-Fi",
        "value": true
      }
    ],
    "petsAllowed": true,
    "checkinTime": "16:00",
    "checkoutTime": "10:00",
    "numberOfRooms": 1,
    "maximumAttendeeCapacity": 8,
    "starRating": {
      "@type": "Rating",
      "ratingValue": 5
    },
    "priceRange": "¥50,000-¥70,000",
    "currenciesAccepted": "JPY",
    "paymentAccepted": "Cash, Credit Card",
    "availableLanguage": ["Japanese"],
    "smokingAllowed": false,
    "image": [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.9,
      "reviewCount": 127
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": 5,
          "bestRating": 5
        },
        "author": {
          "@type": "Person",
          "name": "田中さん"
        },
        "reviewBody": "愛犬と一緒に最高の時間を過ごせました。天然芝エリアが広くて、ペットも大喜びでした。"
      }
    ],
    "hasMap": "https://maps.google.com/?q=兵庫県淡路市明神字西濱645",
    "makesOffer": {
      "@type": "Offer",
      "name": "ペット特化型プライベートヴィラ宿泊",
      "price": "50000",
      "priceCurrency": "JPY",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}