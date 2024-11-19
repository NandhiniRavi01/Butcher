import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Button, Grid, Typography, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Items = () => {
  const [search, setSearch] = useState('');
  const items = ['mutton', 'chicken']; // List of available items

  // Filter items based on the search term
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Grid container>
        <Grid item xs={12} lg={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <ArrowBackIosIcon />
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                sx={{ width: '200px' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Box>

            {search === '' ? null : filteredItems.length > 0 ? (
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                {filteredItems.map((item, index) => (
                  <Typography key={index} sx={{ fontWeight: 400, fontSize: '20px' }}>
                    {item}
                  </Typography>
                ))}
              </Box>
            ) : (
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <SearchIcon style={{ color: '#C7C7C7', height: '200px', width: '180px' }} />
                <Typography sx={{ fontWeight: 400, fontSize: '30px' }}>Item not found</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: '18px' }}>Try searching the item with</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: '18px' }}>a different keyword</Typography>
              </Box>
            )}

            <Button
              variant="contained"
              sx={{ backgroundColor: '#FE8C00', marginTop: '150px', borderRadius: '20px' }}
            >
              Start Ordering
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Items;
