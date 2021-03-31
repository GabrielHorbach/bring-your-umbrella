import React, { useContext, useState } from 'react';

interface ContextProps {
  children: React.ReactNode;
}

interface WeatherContextProps {
  useUmbrella: boolean;
  setUseUmbrella: React.Dispatch<React.SetStateAction<boolean>>
}

const WeatherContext = React.createContext<WeatherContextProps>({
  useUmbrella: false,
  setUseUmbrella: () => {},
});

export function useWeatherContext() {
  return useContext(WeatherContext);
}

export function WeatherProvider({ children }: ContextProps) {
  const [useUmbrella, setUseUmbrella] = useState(false);

  return (
    <WeatherContext.Provider
      value={{
        useUmbrella, setUseUmbrella,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
