/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly apiKey = '';

  async getWeather(city: string): Promise<any> {
    const url = `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${city}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
    }
  }
}
