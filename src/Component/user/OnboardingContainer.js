import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import img1 from '../Assets/onboarding1.png';
import img2 from '../Assets/onboarding2.png';
import img3 from '../Assets/onboarding3.png';

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Handle Next button click
  const handleNext = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Set the background image based on the current page
  const getBackgroundImage = () => {
    if (currentPage === 1) return img1;
    if (currentPage === 2) return img2;
    return img3;
  };

  // Set button color for indicators
  const getButtonColor = (step) => {
    return currentPage === step ? 'rgba(254, 140, 0, 1)' : 'white';
  };

  // Dynamic content based on the current page
  const pageContent = [
    {
      title: 'Welcome to the Butcher Shop',
      description: 'Provide a brief history of the shop, its mission, and what sets it apart from other butcher shops.',
    },
    {
      title: 'Shop Culture and Values',
      description: 'Highlight the shops commitment to quality, ethical sourcing of meat, respect for customers, and teamwork.',
    },
    {
      title: 'Hygiene and Food Safety',
      description: 'Discuss the importance of maintaining a clean workspace, including regular sanitation of equipment, surfaces, and tools.',
    },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '812px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '70%', sm: '350px', md: '400px' },
          padding: 2,
          borderRadius: '32px',
          backgroundColor: 'rgba(254, 140, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '300px',
        }}
      >
        <Typography
          variant="h5"
          color="white"
          sx={{
            textAlign: 'center',
            fontSize: '25px',
            marginBottom: 6,
          }}
        >
          {pageContent[currentPage - 1].title}
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{
            textAlign: 'center',
            fontSize: '14px',
            marginBottom: 3,
          }}
        >
          {pageContent[currentPage - 1].description}
        </Typography>

        {/* Page Indicator */}
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          {[1, 2, 3].map((step) => (
            <Box
              key={step}
              sx={{
                width: { xs: '16px', sm: '24px' },
                height: { xs: '4px', sm: '6px' },
                borderRadius: '100px',
                backgroundColor: getButtonColor(step),
                '&:hover': {
                  backgroundColor: getButtonColor(step),
                },
                transition: 'width 0.3s, height 0.3s',
              }}
            />
          ))}
        </Box>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          // disabled={currentPage === 3} // Disable on the last page
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            padding: { xs: '8px 16px', sm: '10px 20px' },
            fontSize: { xs: '0.8rem', sm: '1rem' },
            textTransform: 'none',
            display: 'flex',
            alignItems: 'center',
            mt: 10,
            gap: 1,
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
        >
          Next <ArrowForward />
          </Button>
      </Box>
    </Box>
  );
};

export default Onboarding;

