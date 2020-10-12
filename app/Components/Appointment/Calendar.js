import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";

import colors from "../../Config/colors";

function AppCalendar(props) {
  const [selected, setSelected] = useState("");

  const onDayPress = (day) => {
    setSelected(day.dateString);
  };

  const localeConfig = (LocaleConfig.locales["EN"] = {
    monthNames: [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    monthNamesShort: [
      "Jan.",
      "Feb.",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul.",
      "Aug",
      "Sep.",
      "Oct.",
      "Nov.",
      "Dec."
    ],
    dayNames: ["M", "T", "W", "T", "F", "S", "S"],
    dayNamesShort: ["M", "T", "W", "T", "F", "S", "S"]
  });
  LocaleConfig.defaultLocale = "EN";
  return (
    <View>
      <Calendar
        // current={}
        style={styles.calendar}
        hideExtraDays
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            marked: true
          }
        }}
        dayComponent={(props) => {
          const { marking, state } = props;
          const getContentStyle = () => {
            const style = {
              content: {},
              text: {
                color: colors.primary
              }
            };
            if (marking.selected) {
              style.content.backgroundColor = colors.dark;
              style.content.borderRadius = 14;
              style.content.height = 40;
              style.content.width = 30;
            }
            return style;
          };

          const handlePress = () => {
            props.onPress(props.date);
          };

          const { date } = props;
          const contentStyle = getContentStyle();
          return (
            <View>
              <TouchableOpacity
                style={contentStyle.content}
                onPress={handlePress}
              >
                <View style={[styles.contentText, contentStyle.text]}>
                  {marking.selected && (
                    <MaterialCommunityIcons
                      style={{ marginTop: 3 }}
                      color={colors.primary}
                      name="car"
                      size={15}
                    />
                  )}
                  <Text
                    style={{
                      color: marking.selected ? colors.primary : colors.dark
                    }}
                  >
                    {String(date.day)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        theme={{
          textDayHeaderFontSize: 14,
          textSectionTitleColor: colors.primary,
          todayTextColor: colors.primary,
          dayTextColor: colors.dark,
          arrowColor: colors.dark
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    width: 350,
    height: 280,
    elevation: 4,
    right: -22
  },
  contentText: {
    alignItems: "center"
  }
});

export default AppCalendar;
