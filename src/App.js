import React, {useState} from 'react'; 
import { fetchWeather } from './api/fetchWeather';

import 'fontsource-roboto';
import { TextField,Card,CardContent,Typography,Grid, Container} from '@material-ui/core';


const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({})

    const search = async (e) => {
        if (e.key === 'Enter'){
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <>
            <div >
            <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                <Card>
                <CardContent align="center"  >
                <Typography variant="h5" color="error" >Weather App</Typography>
                <TextField margin="normal" id="outlined-basic" label="Search..." variant="outlined" type="text"  value={query} onChange={ (e) => setQuery(e.target.value) }  onKeyPress={search}  />
                    {weather.main && (
                        <div >
                            <Typography variant="h5" component="h2" color="primary" gutterBottom  >
                                {weather.name}
                                <sup>{weather.sys.country}</sup>
                            </Typography>
                            <Typography variant="h3">
                                {Math.round(weather.main.temp)}
                                <sup>&deg;C</sup>
                            </Typography>
                            <div>
                                <img className="" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                                <Typography varient="body1" >{weather.weather[0].description} </Typography >
                            </div>
                            
                        </div>
                        
                    ) }
                </CardContent>
                </Card>
            </Grid>
            </Container>
            </div>
        </>
    );
}
export default App
