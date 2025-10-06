import * as React from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Styles } from "../styles/globalStyles";
import { myColors } from "../styles/colors";

interface ConversionUnit {
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

interface ConversionCategory {
  name: string;
  units: ConversionUnit[];
}

const conversionCategories: ConversionCategory[] = [
  {
    name: "Length",
    units: [
      { name: "Meter", symbol: "m", toBase: (v) => v, fromBase: (v) => v },
      { name: "Kilometer", symbol: "km", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
      { name: "Centimeter", symbol: "cm", toBase: (v) => v / 100, fromBase: (v) => v * 100 },
      { name: "Millimeter", symbol: "mm", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      { name: "Inch", symbol: "in", toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
      { name: "Foot", symbol: "ft", toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
      { name: "Yard", symbol: "yd", toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
      { name: "Mile", symbol: "mi", toBase: (v) => v * 1609.34, fromBase: (v) => v / 1609.34 },
    ]
  },
  {
    name: "Weight",
    units: [
      { name: "Kilogram", symbol: "kg", toBase: (v) => v, fromBase: (v) => v },
      { name: "Gram", symbol: "g", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      { name: "Pound", symbol: "lb", toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
      { name: "Ounce", symbol: "oz", toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
      { name: "Ton", symbol: "t", toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    ]
  },
  {
    name: "Temperature",
    units: [
      { name: "Celsius", symbol: "°C", toBase: (v) => v, fromBase: (v) => v },
      { name: "Fahrenheit", symbol: "°F", toBase: (v) => (v - 32) * 5/9, fromBase: (v) => v * 9/5 + 32 },
      { name: "Kelvin", symbol: "K", toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 },
    ]
  },
  {
    name: "Volume",
    units: [
      { name: "Liter", symbol: "L", toBase: (v) => v, fromBase: (v) => v },
      { name: "Milliliter", symbol: "mL", toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      { name: "Gallon (US)", symbol: "gal", toBase: (v) => v * 3.78541, fromBase: (v) => v / 3.78541 },
      { name: "Quart", symbol: "qt", toBase: (v) => v * 0.946353, fromBase: (v) => v / 0.946353 },
      { name: "Pint", symbol: "pt", toBase: (v) => v * 0.473176, fromBase: (v) => v / 0.473176 },
      { name: "Cup", symbol: "cup", toBase: (v) => v * 0.236588, fromBase: (v) => v / 0.236588 },
    ]
  }
];

export default function Converter() {
  const [selectedCategory, setSelectedCategory] = React.useState(0);
  const [fromUnit, setFromUnit] = React.useState(0);
  const [toUnit, setToUnit] = React.useState(1);
  const [inputValue, setInputValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const currentCategory = conversionCategories[selectedCategory];

  const convert = () => {
    if (!inputValue || isNaN(parseFloat(inputValue))) {
      setResult("");
      return;
    }

    const value = parseFloat(inputValue);
    const fromUnitObj = currentCategory.units[fromUnit];
    const toUnitObj = currentCategory.units[toUnit];

    const baseValue = fromUnitObj.toBase(value);
    const convertedValue = toUnitObj.fromBase(baseValue);

    setResult(convertedValue.toFixed(6).replace(/\.?0+$/, ""));
  };

  React.useEffect(() => {
    convert();
  }, [inputValue, fromUnit, toUnit, selectedCategory]);

  React.useEffect(() => {
    setFromUnit(0);
    setToUnit(1);
    setInputValue("");
    setResult("");
  }, [selectedCategory]);

  return (
    <View style={Styles.converterContainer}>
      <ScrollView style={Styles.converterScrollContainer}>
        <Text style={[Styles.converterTitle, { textAlign: 'center', marginBottom: 32 }]}>
          Unit Converter
        </Text>
        
        {/* Category Selection */}
        <View style={{ marginBottom: 32 }}>
          <Text style={Styles.converterLabel}>Category:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
            {conversionCategories.map((category, index) => (
              <Pressable
                key={index}
                style={selectedCategory === index ? Styles.categoryButtonActive : Styles.categoryButton}
                onPress={() => setSelectedCategory(index)}
              >
                <Text style={selectedCategory === index ? Styles.categoryButtonTextActive : Styles.categoryButtonText}>
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* From Unit Selection */}
        <View style={{ marginBottom: 24 }}>
          <Text style={Styles.converterLabel}>From:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
            {currentCategory.units.map((unit, index) => (
              <Pressable
                key={index}
                style={fromUnit === index ? Styles.unitButtonActive : Styles.unitButton}
                onPress={() => setFromUnit(index)}
              >
                <Text style={fromUnit === index ? Styles.unitButtonTextActive : Styles.unitButtonText}>
                  {unit.symbol}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* To Unit Selection */}
        <View style={{ marginBottom: 24 }}>
          <Text style={Styles.converterLabel}>To:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 8 }}>
            {currentCategory.units.map((unit, index) => (
              <Pressable
                key={index}
                style={toUnit === index ? Styles.unitButtonActive : Styles.unitButton}
                onPress={() => setToUnit(index)}
              >
                <Text style={toUnit === index ? Styles.unitButtonTextActive : Styles.unitButtonText}>
                  {unit.symbol}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>

        {/* Input */}
        <View style={{ marginBottom: 24 }}>
          <Text style={Styles.converterLabel}>
            Enter value ({currentCategory.units[fromUnit].symbol}):
          </Text>
          <TextInput
            style={Styles.converterInput}
            value={inputValue}
            onChangeText={setInputValue}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor={myColors.onSurfaceVariant}
          />
        </View>

        {/* Result */}
        <View style={{ marginBottom: 32 }}>
          <Text style={Styles.converterLabel}>
            Result ({currentCategory.units[toUnit].symbol}):
          </Text>
          <View style={Styles.converterResult}>
            <Text style={Styles.converterResultText}>
              {result || "0"}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
