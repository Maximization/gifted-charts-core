import { Framework } from '../utils/types';
import { type extendedPopulationPyramidPropsType } from './types';
export declare const usePopulationPyramid: (props: extendedPopulationPyramidPropsType) => {
    height: number;
    width: number;
    verticalMarginBetweenBars: number;
    barsMapToYAxisSections: boolean;
    data: import("./types").popnPyramidDataItem[] | (import("./types").popnPyramidDataItem[] & import("./types").popnPyramidDataItemReactJS[]);
    hideRules: boolean;
    hideYAxisText: boolean;
    yAxisColor: import("react-native").ColorValue;
    yAxisThickness: number;
    xAxisColor: import("react-native").ColorValue;
    xAxisThickness: number;
    xAxisType: string | import("../utils/types").RuleTypes;
    xAxisNoOfSections: number;
    showXAxisIndices: boolean;
    xAxisIndicesWidth: number;
    xAxisIndicesHeight: number;
    xAxisIndicesColor: import("react-native").ColorValue;
    xAxisIndicesShiftY: number;
    showXAxisLabelTexts: boolean;
    xAxisLabelFontSize: number;
    xAxisLabelFontStyle: import("react-native-svg").FontStyle;
    xAxisLabelFontWeight: import("react-native-svg").FontWeight;
    xAxisLabelFontFamily: string;
    xAxisLabelColor: import("react-native").ColorValue;
    xAxisLabelShiftX: number;
    xAxisLabelShiftY: number;
    xAxisLabelPrefix: string;
    xAxisLabelSuffix: string;
    formatXAxisLabels: ((label: string) => string) | undefined;
    showVerticalLines: boolean;
    verticalLinesColor: import("react-native").ColorValue;
    verticalLinesThickness: number;
    verticalLinesType: string | import("../utils/types").RuleTypes;
    verticalLinesStrokeDashArray: string | number[];
    showYAxisIndices: boolean;
    yAxisIndicesWidth: number;
    yAxisIndicesHeight: number;
    yAxisIndicesColor: import("react-native").ColorValue;
    yAxisLabelFontSize: number;
    yAxisLabelFontStyle: import("react-native-svg").FontStyle;
    yAxisLabelFontWeight: import("react-native-svg").FontWeight;
    yAxisLabelFontFamily: string;
    yAxisLabelColor: import("react-native").ColorValue;
    yAxisLabelTextMarginRight: number;
    yAxisLabelTexts: string[];
    showValuesAsBarLabels: boolean;
    rulesThickness: number;
    rulesColor: import("react-native").ColorValue;
    rulesType: string | import("../utils/types").RuleTypes;
    dashWidth: number;
    dashGap: number;
    leftBarLabelWidth: number;
    leftBarLabelFontSize: number;
    leftBarLabelColor: import("react-native").ColorValue;
    leftBarLabelFontStyle: import("react-native-svg").FontStyle;
    leftBarLabelFontWeight: import("react-native-svg").FontWeight;
    leftBarLabelFontFamily: string;
    leftBarLabelPrefix: string;
    leftBarLabelSuffix: string;
    rightBarLabelWidth: number;
    rightBarLabelFontSize: number;
    rightBarLabelColor: import("react-native").ColorValue;
    rightBarLabelFontStyle: import("react-native-svg").FontStyle;
    rightBarLabelFontWeight: import("react-native-svg").FontWeight;
    rightBarLabelFontFamily: string;
    rightBarLabelPrefix: string;
    rightBarLabelSuffix: string;
    formatBarLabels: ((label: string) => string) | undefined;
    showMidAxis: boolean;
    midAxisLabelWidth: number;
    midAxisLabelFontSize: number;
    midAxisLabelColor: import("react-native").ColorValue;
    midAxisLabelFontStyle: import("react-native-svg").FontStyle;
    midAxisLabelFontWeight: import("react-native-svg").FontWeight;
    midAxisLabelFontFamily: string;
    leftBarColor: import("react-native").ColorValue;
    rightBarColor: import("react-native").ColorValue;
    leftBarBorderColor: import("react-native").ColorValue;
    rightBarBorderColor: import("react-native").ColorValue;
    leftBarBorderWidth: number;
    rightBarBorderWidth: number;
    leftBarBorderRadius: number;
    rightBarBorderRadius: number;
    allCornersRounded: boolean;
    showSurplus: boolean;
    showSurplusLeft: boolean;
    showSurplusRight: boolean;
    leftSurplusColor: import("react-native").ColorValue;
    leftSurplusBorderColor: import("react-native").ColorValue;
    rightSurplusColor: import("react-native").ColorValue;
    rightSurplusBorderColor: import("react-native").ColorValue;
    leftSurplusBorderWidth: number;
    rightSurplusBorderWidth: number;
    yAxisLabelWidth: number;
    noOfSections: number;
    containerHeight: number;
    stepHeight: number;
    xAxisLabelsHeight: number;
    containerHeightWithXaxisLabels: number;
    mid: number;
    leftMax: number;
    rightMax: number;
    max: number;
    xAxisRoundToDigits: number;
    midAxisAndLabelWidth: number;
    barWidthFactor: number;
    leftXAfterMid: number;
    rightXAfterMid: number;
    yAxisLineProps: {
        framework?: Framework.reactNative | undefined;
    } & import("./types").RulesProps;
    midAxisLineCommonProps: {
        framework?: Framework.reactNative | undefined;
    } & import("./types").RulesProps;
    xAxisLabelY: number;
    xAxisIndicesCommonProps: {
        y1: number;
        y2: number;
        stroke: import("react-native").ColorValue;
        strokeWidth: number;
    };
    verticalLinesCommonProps: {
        framework?: Framework.reactNative | undefined;
    } & import("./types").RulesProps;
    xAxisLabelsCommonProps: {
        y: number;
        stroke: import("react-native").ColorValue;
        fontSize: number;
        fontStyle: import("react-native-svg").FontStyle;
        fontWeight: import("react-native-svg").FontWeight;
        fontFamily: string;
    };
    getXLabel: (index: number) => string;
};
