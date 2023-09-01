import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from '../global/footer';

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  return (
    <Box  
    sx={{maxHeight:'100vh'}}
    >
      <Container 
    
      > 
    <Box sx={{flexGrow : 1, justifyContent : 'start'}}  spacing={2}>
        <Grid  container >
            <Grid item   sm={12} xs={12} md={4}>
                <img src={`../../assets/student.png`}></img>
            </Grid>
            <Grid item sx={{
                marginTop: '6rem'
            }} sm={12} xs={12} md={4}>
            <Typography sx={{
                
                            position: 'relative',                     
                            marginRight: '10px',
                            textAlign : "center",
                            justifyContent : 'center',
                            margin : '0px', 
                            }}
                            m={4} variant="h1">
                            Make payment at your comfort zone.
            </Typography>
                <img src={`../../assets/Wallets.png`}></img>

            </Grid>
            <Grid item  
            sx={{
                marginTop: '20rem',
              
            }}
            sm={12} xs={12} md={4}>
              <Box>
              <img style={{height: '3rem'}}src={`../../assets/blueWallets.png`}></img>
                <Typography sx={{
                    
                    position: 'relative',                     
                    marginRight: '10px',
                    textAlign : "center",
                    justifyContent : 'center',
                    marginTop : '-2.5rem', 
                    marginLeft : '0.5rem',
                    color : '#3C50E0'
                    }}

                    m={4} variant="h5">
                    Save as much money in your wallet
                </Typography>
              </Box>
              <Box>
              <img style={{height: '3rem'}}src={`../../assets/hand.svg`}></img>
                            <Typography sx={{
                                
                                position: 'relative',                     
                                marginRight: '10px',
                                textAlign : "center",
                                justifyContent : 'center',
                                marginTop : '-2.5rem', 
                                marginLeft : '0.5rem',
                                color : '#3C50E0'
                                }}

                                m={4} variant="h5">
                Link your credit card to wallet made easy
                </Typography>
              </Box>
              <Box>
              <img style={{height: '3rem'}}src={`../../assets/bank.svg`}></img>
              <Typography sx={{
                
                position: 'relative',                     
                marginRight: '10px',
                textAlign : "center",
                justifyContent : 'center',
                marginTop : '-2.5rem', 
                marginLeft : '1.5rem',
                color : '#3C50E0'
                }}

                m={4} variant="h5">
                Institutional fee payment includes <br />
Departmental and other related payments.
</Typography>
              </Box>
            </Grid>

                    

        </Grid>    
    </Box> 





    </Container>

    <Footer />
    </Box>
  );
};

export default Home;
