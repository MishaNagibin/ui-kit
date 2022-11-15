<template>
    <div class="ui-datepicker">
        <cEdit
            v-model="initialValue"
            :mask="maskInput"
            :placeholder="preparedPlaceholder"
            :is-clear="clearable && initialValue.length > 0"
            width="320px"
            is-hide-status
            @change="changeDate($event.target.value)"
        />
        <span
            class="icon calendar-icon"
            ref="icon"
            @click="open"
        />
        <div
            v-if="isOpened"
            :class="['calendar', { 'position-top': isCalendarPositionTop }]"
            ref="calendar"
        >
            <div
                :style="stylesHeader"
                class="header"
                ref="header"
            >
                <div>
                    <span
                        v-if="!isOpenedMonth && !isOpenedYear && !isOpenedTime"
                        class="month"
                        @click.stop="openCloseMenuMonth"
                    >{{ preliminaryMonthName }}</span>
                    <span
                        v-if="!isOpenedYear && !isOpenedTime"
                        class="year"
                        @click.stop="openCloseMenuYear"
                    >{{ preliminaryYear }}</span>
                    <span
                        v-else-if="isOpenedYear"
                        class="not-select"
                    >{{ minRangeYear }} − {{ maxRangeYear }}</span>
                    <span
                        v-if="isDateTime && !isOpenedMonth && !isOpenedYear && !isOpenedTime"
                        class="time"
                        @click.stop="openCloseMenuTime"
                    >{{ preliminaryTime }}</span>
                    <span
                        v-else-if="isOpenedTime"
                        class="not-select"
                    >{{ preliminaryTime }}</span>
                </div>
                <div v-if="!isOpenedTime">
                    <span
                        class="icon arrow-up"
                        @click="prev"
                    />
                    <span
                        class="icon arrow-up"
                        @click="next"
                    />
                </div>
                <div v-else>
                    <template v-if="isIconsInsteadButtonsForTime">
                        <span
                            class="icon close"
                            @click.stop="cancelSelectTime"
                        />
                        <span
                            class="icon checkmark"
                            @click.stop="saveTime"
                        />
                    </template>
                    <template v-else>
                        <cButton
                            dont-upper-case
                            width="55px"
                            height="20px"
                            font-size="11px"
                            mode="red"
                            @click.stop="cancelSelectTime"
                        >Отмена</cButton>
                        <cButton
                            dont-upper-case
                            width="55px"
                            height="20px"
                            font-size="11px"
                            mode="green"
                            @click.stop="saveTime"
                        >Готово</cButton>
                    </template>
                </div>
            </div>
            <div
                v-if="isOpenedMonth"
                :class="['months', { opened: isMonthAnimationOpened, closed: isMonthAnimationClosed }]"
                :style="stylesMonths"
            >
                <div
                    v-for="(m, i) of renderMonths"
                    :key="i"
                    :class="{ preliminary: preliminaryMonth === i }"
                    @click.stop="selectMonth(i)"
                >{{ m }}</div>
            </div>
            <div
                v-if="isOpenedYear"
                :class="['years', { opened: isYearAnimationOpened, closed: isYearAnimationClosed, animated: isYearsListAnimation }]"
                :style="stylesYears"
                ref="years"
            >
                <div
                    v-for="(y, i) of renderYears"
                    :key="i"
                    :class="{ preliminary: preliminaryYear === y && !isYearsListAnimation }"
                    @click.stop="selectYear(y)"
                >{{ y }}</div>
            </div>
            <div
                v-if="isOpenedTime"
                :class="['times', { opened: isTimeAnimationOpened, closed: isTimeAnimationClosed }]"
            >
                <div>
                    <div>Часы</div>
                    <div>Минуты</div>
                    <div>Секунды</div>
                </div>
                <div :style="stylesTimes">
                    <div>
                        <div
                            v-for="(h, i) of renderHours"
                            :key="i"
                            :class="{ preliminary: preliminaryHours === h }"
                            @click="selectHours(h)"
                        >{{ h }}</div>
                    </div>
                    <div>
                        <div
                            v-for="(m, i) of renderMinutes"
                            :key="i"
                            :class="{ preliminary: preliminaryMinutes === m }"
                            @click="selectMinutes(m)"
                        >{{ m }}</div>
                    </div>
                    <div>
                        <div
                            v-for="(s, i) of renderSeconds"
                            :key="i"
                            :class="{ preliminary: preliminarySeconds === s }"
                            @click="selectSeconds(s)"
                        >{{ s }}</div>
                    </div>
                </div>
            </div>
            <div
                v-if="!isOpenedMonth && !isOpenedYear && !isOpenedTime"
                :class="['days', { opened: isDayAnimationOpened, closed: isDayAnimationClosed, animated: isDaysListAnimation }]"
            >
                <div>
                    <div
                        v-for="(d, i) of daysOfWeek"
                        :key="i"
                    >{{ d }}</div>
                </div>
                <div
                    :style="stylesDay"
                    ref="preliminaryDaysList"
                >
                    <div>
                        <div
                            v-for="(d, i) of prevDays"
                            :key="i"
                            :class="['day', { 'not-selected': d.isNotSelected, today: !isDontHighlightToday && d.isToday && !isDaysListAnimation, selected: d.isSelected && !isDaysListAnimation, 'day-off': d.isDayOff, disabled: d.isDisabled }]"
                            @click="selectDay(d)"
                        >{{ d.day }}</div>
                    </div>
                    <div ref="preliminaryDays">
                        <div
                            v-for="(d, i) of days"
                            :key="i"
                            :class="['day', { 'not-selected': d.isNotSelected, today: !isDontHighlightToday && d.isToday && !isDaysListAnimation, selected: d.isSelected, 'day-off': d.isDayOff, disabled: d.isDisabled }]"
                            @click="selectDay(d)"
                        >{{ d.day }}</div>
                    </div>
                    <div>
                        <div
                            v-for="(d, i) of nextDays"
                            :key="i"
                            :class="['day', { 'not-selected': d.isNotSelected, today: !isDontHighlightToday && d.isToday && !isDaysListAnimation, selected: d.isSelected && !isDaysListAnimation, 'day-off': d.isDayOff, disabled: d.isDisabled }]"
                            @click="selectDay(d)"
                        >{{ d.day }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import cButton from "@/components/Button.vue"
import cEdit from "@/components/Edit.vue"

const MONTH: string[] = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]

interface Day {
    day: number
    month: number
    year: number
    isDayOff?: boolean
    isDisabled?: boolean
    isNotSelected?: boolean
    isToday?: boolean
    isSelected?: boolean
}

export default Vue.extend({
    name: "cDatePicker",
    components: { cButton, cEdit },
    model: {
        prop: "value",
        event: "update:value",
    },
    props: {
        value: {
            type: [Date, String, Number],
            default: "",
        },
        format: {
            type: String,
            default: "DD.MM.YYYY",
            validator: (v: string) =>
                [
                    "YYYY.MM.DD",
                    "YYYY-MM-DD",
                    "YYYY/MM/DD",
                    "DD.MM.YYYY",
                    "DD-MM-YYYY",
                    "DD/MM/YYYY",
                    "MM.DD.YYYY",
                    "MM-DD-YYYY",
                    "MM/DD/YYYY",
                ].includes(v),
        },
        type: {
            type: String,
            default: "date",
            validator: (v: string) => ["date", "datetime"].includes(v),
        },
        placeholder: {
            type: String,
        },
        disabledDate: {
            type: Function,
        },
        clearable: {
            type: Boolean,
            default: true,
        },
        isDontHighlightToday: {
            type: Boolean,
            default: false,
        },
        isIconsInsteadButtonsForTime: {
            type: Boolean,
            default: true,
        },
        dayColor: {
            type: String,
            default: "#1e1e1e",
        },
        dayHoverColor: {
            type: String,
            default: "#1e1e1e",
        },
        dayHoverBackground: {
            type: String,
            default: "#3f51b511",
        },
        dayHoverOutline: {
            type: String,
            default: "none",
        },
        dayHoverOutlineOffset: {
            type: String,
            default: "0",
        },
        dayBorderRadius: {
            type: String,
            default: "0",
        },
        daySelectedColor: {
            type: String,
            default: "#ffffff",
        },
        daySelectedBackground: {
            type: String,
            default: "#4e62d1",
        },
        daySelectedOutline: {
            type: String,
            default: "none",
        },
        daySelectedOutlineOffset: {
            type: String,
            default: "0",
        },
        dayOffColor: {
            type: String,
            default: "#f14a4a",
        },
        dayOffBackground: {
            type: String,
            default: "transparent",
        },
        dayOffOutline: {
            type: String,
            default: "none",
        },
        dayOffOutlineOffset: {
            type: String,
            default: "0",
        },
        dayNotSelectedColor: {
            type: String,
            default: "#c0c0c0",
        },
        dayNotSelectedBackground: {
            type: String,
            default: "transparent",
        },
        dayNotSelectedOutline: {
            type: String,
            default: "none",
        },
        dayNotSelectedOutlineOffset: {
            type: String,
            default: "0",
        },
        todayColor: {
            type: String,
            default: "#1e1e1e",
        },
        todayBackground: {
            type: String,
            default: "transparent",
        },
        todayOutline: {
            type: String,
            default: "2px solid green",
        },
        todayOutlineOffset: {
            type: String,
            default: "-2px",
        },
        dayDisabledColor: {
            type: String,
            default: "#00000059",
        },
        dayDisabledBackground: {
            type: String,
            default: "#dbdbdb",
        },
        headerMonthColor: {
            type: String,
            default: "#1e1e1e",
        },
        headerMonthHoverColor: {
            type: String,
            default: "#4960df",
        },
        headerYearColor: {
            type: String,
            default: "#1e1e1e",
        },
        headerYearHoverColor: {
            type: String,
            default: "#4960df",
        },
        headerTimeColor: {
            type: String,
            default: "#1e1e1e",
        },
        headerTimeHoverColor: {
            type: String,
            default: "#4960df",
        },
        headerIconColor: {
            type: String,
            default: "#636363",
        },
        headerIconHoverColor: {
            type: String,
            default: "#4960df",
        },
        monthColor: {
            type: String,
            default: "#1e1e1e",
        },
        monthBorderRadius: {
            type: String,
            default: "0",
        },
        monthSelectedColor: {
            type: String,
            default: "#ffffff",
        },
        monthSelectedFontWeight: {
            type: String,
            default: "400",
        },
        monthSelectedBackground: {
            type: String,
            default: "#4e62d1",
        },
        monthSelectedOutline: {
            type: String,
            default: "none",
        },
        monthSelectedOutlineOffset: {
            type: String,
            default: "0",
        },
        monthHoverColor: {
            type: String,
            default: "#1e1e1e",
        },
        monthHoverBackground: {
            type: String,
            default: "#3f51b511",
        },
        monthHoverOutline: {
            type: String,
            default: "none",
        },
        monthHoverOutlineOffset: {
            type: String,
            default: "0",
        },
        yearColor: {
            type: String,
            default: "#1e1e1e",
        },
        yearBorderRadius: {
            type: String,
            default: "0",
        },
        yearSelectedColor: {
            type: String,
            default: "#ffffff",
        },
        yearSelectedFontWeight: {
            type: String,
            default: "400",
        },
        yearSelectedBackground: {
            type: String,
            default: "#4e62d1",
        },
        yearSelectedOutline: {
            type: String,
            default: "none",
        },
        yearSelectedOutlineOffset: {
            type: String,
            default: "0",
        },
        yearHoverColor: {
            type: String,
            default: "#1e1e1e",
        },
        yearHoverBackground: {
            type: String,
            default: "#3f51b511",
        },
        yearHoverOutline: {
            type: String,
            default: "none",
        },
        yearHoverOutlineOffset: {
            type: String,
            default: "0",
        },
        timeColor: {
            type: String,
            default: "#1e1e1e",
        },
        timeBorderRadius: {
            type: String,
            default: "0",
        },
        timeSelectedColor: {
            type: String,
            default: "#4e62d1",
        },
        timeSelectedFontWeight: {
            type: String,
            default: "600",
        },
        timeSelectedBackground: {
            type: String,
            default: "transparent",
        },
        timeSelectedOutline: {
            type: String,
            default: "none",
        },
        timeSelectedOutlineOffset: {
            type: String,
            default: "0",
        },
        timeHoverColor: {
            type: String,
            default: "#1e1e1e",
        },
        timeHoverBackground: {
            type: String,
            default: "#3f51b511",
        },
        timeHoverOutline: {
            type: String,
            default: "none",
        },
        timeHoverOutlineOffset: {
            type: String,
            default: "0",
        },
    },
    data() {
        return {
            initialValue: this.value,
            selectedYear: null as number | null,
            selectedMonth: null as number | null,
            selectedDay: null as number | null,
            preliminaryYear: null as number | null,
            preliminaryMonth: null as number | null,
            preliminaryDay: null as number | null,
            selectedHours: "",
            selectedMinutes: "",
            selectedSeconds: "",
            preliminaryHours: "00",
            preliminaryMinutes: "00",
            preliminarySeconds: "00",
            isOpened: false,
            isOpenedTime: false,
            isOpenedMonth: false,
            isMonthAnimationOpened: false,
            isMonthAnimationClosed: false,
            isOpenedYear: false,
            isYearAnimationOpened: false,
            isYearAnimationClosed: false,
            isTimeAnimationOpened: false,
            isTimeAnimationClosed: false,
            isDayAnimationOpened: false,
            isDayAnimationClosed: false,
            isYearsListAnimation: false,
            isDaysListAnimation: false,
            renderMonths: MONTH,
            minRangeYear: null as number | null,
            maxRangeYear: null as number | null,
            daysOfWeek: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
            calendarTable: "",
            prevDays: [] as Day[],
            days: [] as Day[],
            nextDays: [] as Day[],
            isRenderedPrevDays: false,
            isRenderedNextDays: false,
            needDelayScrollDays: false,
            renderHours: Array.from({ length: 24 }, (_, h) => `0${h}`.substr(-2)),
            renderMinutes: Array.from({ length: 60 }, (_, m) => `0${m}`.substr(-2)),
            renderSeconds: Array.from({ length: 60 }, (_, s) => `0${s}`.substr(-2)),
            isCalendarPositionTop: false,
        }
    },
    computed: {
        isFisrtYear(): boolean {
            return /^Y/.test(this.format)
        },
        isFisrtMonth(): boolean {
            return /^M/.test(this.format)
        },
        isFisrtDay(): boolean {
            return /^D/.test(this.format)
        },
        separatorFormat(): string {
            return this.format.replace(/[A-Z]/g, "")[0]
        },
        splittedFormat(): string[] {
            return this.format.split(this.separatorFormat)
        },
        maskInput(): string {
            const arr = this.splittedFormat
            const sep = this.separatorFormat
            return `${arr[0].length}${sep}${arr[1].length}${sep}${arr[2].length} ${this.isDateTime ? "2:2:2" : ""}`
        },
        preliminaryMonthName(): string | undefined {
            return this.preliminaryMonth !== null ? MONTH[this.preliminaryMonth + 1 === 13 ? 0 : this.preliminaryMonth] : undefined
        },
        renderYears(): number[] {
            return Array.from({ length: 24 }, (_, v) => v + ((this.minRangeYear ?? 0) - 6))
        },
        currentDate(): Day {
            const date = new Date()
            return { day: date.getDate(), month: date.getMonth(), year: date.getFullYear() }
        },
        isDateTime(): boolean {
            return this.type === "datetime"
        },
        preliminaryTime(): string {
            return `${this.preliminaryHours}:${this.preliminaryMinutes}:${this.preliminarySeconds}`
        },
        preparedPlaceholder(): string {
            return `${this.placeholder ?? this.format}${this.isDateTime ? " чч:мм:сс" : ""}`
        },
        stylesDay(): { [key: string]: string } {
            return {
                "--dayColor": this.dayColor,
                "--dayHoverColor": this.dayHoverColor,
                "--dayHoverBackground": this.dayHoverBackground,
                "--dayHoverOutline": this.dayHoverOutline,
                "--dayHoverOutlineOffset": this.dayHoverOutlineOffset,
                "--dayBorderRadius": this.dayBorderRadius,
                "--daySelectedColor": this.daySelectedColor,
                "--daySelectedBackground": this.daySelectedBackground,
                "--daySelectedOutline": this.daySelectedOutline,
                "--daySelectedOutlineOffset": this.daySelectedOutlineOffset,
                "--dayOffColor": this.dayOffColor,
                "--dayOffBackground": this.dayOffBackground,
                "--dayOffOutline": this.dayOffOutline,
                "--dayOffOutlineOffset": this.dayOffOutlineOffset,
                "--dayNotSelectedColor": this.dayNotSelectedColor,
                "--dayNotSelectedBackground": this.dayNotSelectedBackground,
                "--dayNotSelectedOutline": this.dayNotSelectedOutline,
                "--dayNotSelectedOutlineOffset": this.dayNotSelectedOutlineOffset,
                "--todayColor": this.todayColor,
                "--todayBackground": this.todayBackground,
                "--todayOutline": this.todayOutline,
                "--todayOutlineOffset": this.todayOutlineOffset,
                "--dayDisabledColor": this.dayDisabledColor,
                "--dayDisabledBackground": this.dayDisabledBackground,
            }
        },
        stylesHeader(): { [key: string]: string } {
            return {
                "--headerMonthColor": this.headerMonthColor,
                "--headerMonthHoverColor": this.headerMonthHoverColor,
                "--headerYearColor": this.headerYearColor,
                "--headerYearHoverColor": this.headerYearHoverColor,
                "--headerTimeColor": this.headerTimeColor,
                "--headerTimeHoverColor": this.headerTimeHoverColor,
                "--headerIconColor": this.headerIconColor,
                "--headerIconHoverColor": this.headerIconHoverColor,
            }
        },
        stylesMonths(): { [key: string]: string } {
            return {
                "--monthColor": this.monthColor,
                "--monthHoverColor": this.monthHoverColor,
                "--monthHoverBackground": this.monthHoverBackground,
                "--monthHoverOutline": this.monthHoverOutline,
                "--monthHoverOutlineOffset": this.monthHoverOutlineOffset,
                "--monthBorderRadius": this.monthBorderRadius,
                "--monthSelectedColor": this.monthSelectedColor,
                "--monthSelectedFontWeight": this.monthSelectedFontWeight,
                "--monthSelectedBackground": this.monthSelectedBackground,
                "--monthSelectedOutline": this.monthSelectedOutline,
                "--monthSelectedOutlineOffset": this.monthSelectedOutlineOffset,
            }
        },
        stylesYears(): { [key: string]: string } {
            return {
                "--yearColor": this.yearColor,
                "--yearHoverColor": this.yearHoverColor,
                "--yearHoverBackground": this.yearHoverBackground,
                "--yearHoverOutline": this.yearHoverOutline,
                "--yearHoverOutlineOffset": this.yearHoverOutlineOffset,
                "--yearBorderRadius": this.yearBorderRadius,
                "--yearSelectedColor": this.yearSelectedColor,
                "--yearSelectedFontWeight": this.yearSelectedFontWeight,
                "--yearSelectedBackground": this.yearSelectedBackground,
                "--yearSelectedOutline": this.yearSelectedOutline,
                "--yearSelectedOutlineOffset": this.yearSelectedOutlineOffset,
            }
        },
        stylesTimes(): { [key: string]: string } {
            return {
                "--timeColor": this.timeColor,
                "--timeHoverColor": this.timeHoverColor,
                "--timeHoverBackground": this.timeHoverBackground,
                "--timeHoverOutline": this.timeHoverOutline,
                "--timeHoverOutlineOffset": this.timeHoverOutlineOffset,
                "--timeBorderRadius": this.timeBorderRadius,
                "--timeSelectedColor": this.timeSelectedColor,
                "--timeSelectedFontWeight": this.timeSelectedFontWeight,
                "--timeSelectedBackground": this.timeSelectedBackground,
                "--timeSelectedOutline": this.timeSelectedOutline,
                "--timeSelectedOutlineOffset": this.timeSelectedOutlineOffset,
            }
        },
    },
    watch: {
        initialValue(n) {
            if (n.length < 1) {
                this.selectedYear = null
                this.selectedMonth = null
                this.selectedDay = null
                this.selectedHours = "00"
                this.selectedMinutes = "00"
                this.selectedSeconds = "00"
                this.$emit("update:value", "")
                this.$emit("change", "")
            }
        },
        value: {
            immediate: true,
            handler(n) {
                const date = `${n}`.length > 0 ? new Date(n) : new Date()
                this.selectedYear = date.getFullYear()
                this.selectedMonth = date.getMonth()
                this.selectedHours = `${n}`.length > 0 ? `0${date.getHours()}`.substr(-2) : "00"
                this.selectedMinutes = `${n}`.length > 0 ? `0${date.getMinutes()}`.substr(-2) : "00"
                this.selectedSeconds = `${n}`.length > 0 ? `0${date.getSeconds()}`.substr(-2) : "00"
                this.preliminaryHours = this.selectedHours
                this.preliminaryMinutes = this.selectedMinutes
                this.preliminarySeconds = this.selectedSeconds
                this.preliminaryYear = date.getFullYear()
                this.preliminaryMonth = date.getMonth()
                this.preliminaryDay = date.getDate()
                if (`${n}`.length > 0) {
                    this.selectedDay = date.getDate()
                    this.preparedInitialValue(date)
                }
            },
        },
        preliminaryYear: {
            immediate: true,
            handler(n) {
                if (n !== null) {
                    this.minRangeYear = n - 5
                    this.maxRangeYear = n + 6
                }
            },
        },
    },
    methods: {
        renderCalendar() {
            const render = (y: number, m: number, isPrev?: boolean, isNext?: boolean) => {
                const firstDay = new Date(y, m, 7).getDay() // названия дня 7 дня месяца
                const lastDay = new Date(y, m + 1, 0).getDate() // ласт день текущего месяца
                const lastDayLastMonth = m === 0 ? new Date(y, 12, 0).getDate() : new Date(y, m, 0).getDate() // ласт день предыдущего месяца
                const days = isPrev ? "prevDays" : isNext ? "nextDays" : "days"
                this.$data[days] = []
                let i = 1
                let prevDaysCount = 0
                let nextDay = 0

                do {
                    let dow = new Date(y, m, i).getDay()

                    if (dow !== 1 && i === 1) {
                        let k = lastDayLastMonth - firstDay + 1
                        for (let j = 0; j < firstDay; j++) {
                            this.$data[days].push({
                                day: k,
                                month: m - 1,
                                year: y,
                                isDayOff: [0, 6].includes(new Date(y, m - 1, k).getDay()),
                                isDisabled: this.disabledDate !== undefined && this.disabledDate(new Date(y, m - 1, k, 0, 0, 0)),
                                isToday: k === this.currentDate.day && m - 1 === this.currentDate.month && y === this.currentDate.year,
                                isNotSelected: m - 1 !== (this.preliminaryMonth as number) - (isPrev ? 1 : isNext ? -1 : 0),
                                isSelected: k === this.selectedDay && m - 1 === this.selectedMonth && y === this.selectedYear,
                            })
                            prevDaysCount++
                            k++
                        }
                    }
                    if (i <= lastDay) {
                        this.$data[days].push({
                            day: i,
                            month: m,
                            year: y,
                            isDayOff: [0, 6].includes(dow),
                            isDisabled: this.disabledDate !== undefined && this.disabledDate(new Date(y, m, i, 0, 0, 0)),
                            isToday: i === this.currentDate.day && m === this.currentDate.month && y === this.currentDate.year,
                            isNotSelected: m !== (this.preliminaryMonth as number) - (isPrev ? 1 : isNext ? -1 : 0),
                            isSelected: i === this.selectedDay && m === this.selectedMonth && y === this.selectedYear,
                        })
                    } else {
                        if (i - prevDaysCount > lastDay) {
                            nextDay++
                            this.$data[days].push({
                                day: nextDay,
                                month: m + 1,
                                year: y,
                                isDayOff: [0, 6].includes(new Date(y, m + 1, nextDay).getDay()),
                                isDisabled: this.disabledDate !== undefined && this.disabledDate(new Date(y, m + 1, nextDay, 0, 0, 0)),
                                isToday:
                                    nextDay === this.currentDate.day && m + 1 === this.currentDate.month && y === this.currentDate.year,
                                isNotSelected: m + 1 !== (this.preliminaryMonth as number) - (isPrev ? 1 : isNext ? -1 : 0),
                                isSelected: nextDay === this.selectedDay && m + 1 === this.selectedMonth && y === this.selectedYear,
                            })
                        }
                    }
                    i++
                } while (i <= 42)

                setTimeout(
                    () => {
                        const preliminaryDaysList = this.$refs.preliminaryDaysList as HTMLElement | undefined
                        if (preliminaryDaysList !== undefined) {
                            preliminaryDaysList.scrollTop = 240
                            this.needDelayScrollDays = false
                        }
                    },
                    this.needDelayScrollDays ? 300 : 0,
                )
            }
            if (this.preliminaryYear !== null && this.preliminaryMonth !== null) {
                render(
                    this.preliminaryYear - (this.preliminaryMonth - 1 < 0 ? 1 : 0),
                    this.preliminaryMonth - 1 < 0 ? 11 : this.preliminaryMonth - 1,
                    true,
                )
                render(this.preliminaryYear, this.preliminaryMonth)
                render(
                    this.preliminaryYear + (this.preliminaryMonth + 1 > 11 ? 1 : 0),
                    this.preliminaryMonth + 1 > 11 ? 0 : this.preliminaryMonth + 1,
                    false,
                    true,
                )
            }
        },
        preparedInitialValue(date: Date | string) {
            const d = new Date(date)
            const year = d.getFullYear()
            const month = `0${d.getMonth() + 1}`.substr(-2)
            const day = `0${d.getDate()}`.substr(-2)
            const time = d.toLocaleTimeString()

            this.initialValue = `${this.isFisrtYear ? year : this.isFisrtMonth ? month : day}${this.separatorFormat}${
                this.isFisrtYear || this.isFisrtDay ? month : day
            }${this.separatorFormat}${!this.isFisrtYear ? year : day}${this.isDateTime ? ` ${time}` : ""}`

            if (this.preliminaryYear !== null && this.preliminaryMonth !== null && this.isOpened) {
                this.renderCalendar()
            }
        },
        changeDate(value: string) {
            const splittedDate = value.split(this.separatorFormat)
            const lastNumberDate = this.isDateTime ? splittedDate[2].split(" ")[0] : splittedDate[2]

            const splitedTime = this.isDateTime
                ? splittedDate[2].split(" ")[1] === undefined
                    ? []
                    : splittedDate[2].split(" ")[1].split(":")
                : []
            const hour = splitedTime[0] ?? "00"
            const minute = splitedTime[1] ?? "00"
            const second = splitedTime[2] ?? "00"
            const validHours = `${Number(hour) < 1 ? "00" : Number(hour) > 23 ? "23" : `0${hour}`.substr(-2)}`
            const validMinutes = `${Number(minute) < 1 ? "00" : Number(minute) > 59 ? "59" : `0${minute}`.substr(-2)}`
            const validSeconds = `${Number(second) < 1 ? "00" : Number(second) > 59 ? "59" : `0${second}`.substr(-2)}`

            const year = this.isFisrtYear ? splittedDate[0] : lastNumberDate
            const month = this.isFisrtMonth ? splittedDate[0] : splittedDate[1]
            const day = this.isFisrtDay ? splittedDate[0] : this.isFisrtYear ? lastNumberDate : splittedDate[1]
            const validMonth = `${Number(month) < 1 ? "01" : Number(month) > 12 ? 12 : month}`
            const datePrevMonth = new Date(Number(year), Number(validMonth) - 1, 1)
            const datePreliminaryMonth = new Date(Number(year), Number(validMonth), 1)
            const maxDay = Math.round(((datePreliminaryMonth as any) - (datePrevMonth as any)) / 1000 / 3600 / 24)
            const validDay = `${Number(day) < 1 ? "01" : Number(day) > maxDay ? maxDay : day}`

            this.preparedInitialValue(
                `${year}-${validMonth}-${validDay}${this.isDateTime ? ` ${validHours}:${validMinutes}:${validSeconds}` : ""}`,
            )
            const date = this.isDateTime
                ? new Date(
                    Number(year),
                    Number(validMonth) - 1,
                    Number(validDay),
                    Number(validHours),
                    Number(validMinutes),
                    Number(validSeconds),
                )
                : new Date(Number(year), Number(validMonth) - 1, Number(validDay))
            this.$emit("change", date)
        },
        submit() {
            const year = Number(this.preliminaryYear)
            const month = Number(this.preliminaryMonth)
            const day = Number(this.preliminaryDay)
            const hours = Number(this.preliminaryHours)
            const minutes = Number(this.preliminaryMinutes)
            const seconds = Number(this.preliminarySeconds)
            const date = this.isDateTime ? new Date(year, month, day, hours, minutes, seconds) : new Date(year, month, day)
            this.$emit("update:value", date)
            this.$emit("change", date)
        },
        daysListAnimation(isNext?: boolean) {
            const preliminaryDaysList = this.$refs.preliminaryDaysList as HTMLElement | undefined
            this.isDaysListAnimation = true
            if (preliminaryDaysList !== undefined || this.isOpenedMonth) {
                if (!this.isOpenedMonth) {
                    preliminaryDaysList?.scroll({ top: isNext ? 480 : 0, behavior: "smooth" })
                }
                setTimeout(
                    () => {
                        if (this.preliminaryYear !== null && this.preliminaryMonth !== null) {
                            if (isNext) {
                                if (this.isOpenedMonth) {
                                    if (this.preliminaryYear + 1 > 9999) {
                                        this.preliminaryYear = this.selectedYear as number
                                    } else {
                                        this.preliminaryYear++
                                    }
                                } else {
                                    if (this.preliminaryMonth + 1 > 11) {
                                        this.preliminaryMonth = 0
                                        this.preliminaryYear++
                                    } else {
                                        this.preliminaryMonth++
                                    }
                                }
                            } else {
                                if (this.isOpenedMonth) {
                                    if (this.preliminaryYear - 1 < 100) {
                                        this.preliminaryYear = this.selectedYear as number
                                    } else {
                                        this.preliminaryYear--
                                    }
                                } else {
                                    if (this.preliminaryMonth - 1 < 0) {
                                        this.preliminaryMonth = 11
                                        this.preliminaryYear--
                                    } else {
                                        this.preliminaryMonth--
                                    }
                                }
                            }
                            this.renderCalendar()
                        }
                        setTimeout(() => {
                            this.isDaysListAnimation = false
                        }, 100)
                    },
                    preliminaryDaysList !== undefined && !this.isOpenedMonth ? 300 : 0,
                )
            }
        },
        yearsListAnimation(isNext?: boolean) {
            const years = this.$refs.years as HTMLElement | null
            this.isYearsListAnimation = true
            if (years !== null) {
                years.scroll({ top: isNext ? 232 : 0, behavior: "smooth" })
                setTimeout(() => {
                    years.scrollTop = 116
                    this.isYearsListAnimation = false
                    if (this.minRangeYear !== null && this.maxRangeYear !== null && this.selectedYear !== null) {
                        if (isNext) {
                            if (this.maxRangeYear + 6 >= 9999) {
                                this.minRangeYear = this.maxRangeYear < 9999 ? 9988 : this.selectedYear - 5
                                this.maxRangeYear = this.maxRangeYear < 9999 ? 9999 : this.selectedYear + 6
                            } else {
                                this.minRangeYear = this.minRangeYear + 6
                                this.maxRangeYear = this.maxRangeYear + 6
                            }
                        } else {
                            if (this.minRangeYear - 6 <= 100) {
                                this.maxRangeYear = this.minRangeYear > 100 ? 111 : this.selectedYear + 6
                                this.minRangeYear = this.minRangeYear > 100 ? 100 : this.selectedYear - 5
                            } else {
                                this.minRangeYear = this.minRangeYear - 6
                                this.maxRangeYear = this.maxRangeYear - 6
                            }
                        }
                    }
                }, 300)
            }
        },
        prev() {
            if (this.isOpenedTime || this.isYearsListAnimation || this.isDaysListAnimation) {
                return
            }

            if (this.isOpenedYear) {
                this.yearsListAnimation()
            } else if (this.preliminaryYear !== null && this.preliminaryMonth !== null) {
                this.daysListAnimation()
            }
        },
        next() {
            if (this.isOpenedTime || this.isYearsListAnimation || this.isDaysListAnimation) {
                return
            }

            if (this.isOpenedYear) {
                this.yearsListAnimation(true)
            } else if (this.preliminaryYear !== null && this.preliminaryMonth !== null) {
                this.daysListAnimation(true)
            }
        },
        selectDay(d: Day) {
            if (d.isDisabled) {
                return
            }

            this.preliminaryDay = d.day
            this.preliminaryMonth = d.month
            this.submit()
            this.close()
        },
        selectMonth(i: number) {
            this.preliminaryMonth = i
            this.openCloseMenuMonth()
            this.needDelayScrollDays = true
            this.renderCalendar()
        },
        selectYear(i: number) {
            this.preliminaryYear = i < 100 ? 100 : i > 9999 ? 9999 : i
            this.openCloseMenuYear()
            this.openCloseMenuMonth()
        },
        cancelSelectTime() {
            this.preliminaryHours = this.selectedHours
            this.preliminaryMinutes = this.selectedMinutes
            this.preliminarySeconds = this.selectedSeconds
            this.openCloseMenuTime()
        },
        saveTime() {
            if (this.preliminaryDay === null) {
                this.preliminaryDay = new Date().getDate()
            }
            this.submit()
            this.openCloseMenuTime()
        },
        selectHours(h: string) {
            this.preliminaryHours = h
        },
        selectMinutes(m: string) {
            this.preliminaryMinutes = m
        },
        selectSeconds(s: string) {
            this.preliminarySeconds = s
        },
        openCloseMenuTime() {
            if (this.isOpenedTime) {
                this.isTimeAnimationOpened = false
                this.isTimeAnimationClosed = true
                this.needDelayScrollDays = true
                setTimeout(() => {
                    this.isOpenedTime = !this.isOpenedTime
                    this.isDayAnimationOpened = true
                    this.isDayAnimationClosed = false
                }, 300)
                this.renderCalendar()
            } else {
                this.isDayAnimationOpened = false
                this.isDayAnimationClosed = true
                this.isTimeAnimationOpened = true
                this.isTimeAnimationClosed = false
                setTimeout(() => {
                    this.isOpenedTime = !this.isOpenedTime
                }, 300)
            }
        },
        openCloseMenuMonth() {
            if (this.isOpenedMonth) {
                this.isMonthAnimationOpened = false
                this.isMonthAnimationClosed = true
                setTimeout(() => {
                    this.isOpenedMonth = !this.isOpenedMonth
                    this.isDayAnimationOpened = true
                    this.isDayAnimationClosed = false
                }, 300)
            } else {
                this.isDayAnimationOpened = false
                this.isDayAnimationClosed = true
                this.isMonthAnimationOpened = true
                this.isMonthAnimationClosed = false
                setTimeout(() => {
                    this.isOpenedMonth = !this.isOpenedMonth
                }, 300)
            }
        },
        openCloseMenuYear() {
            if (this.isOpenedYear) {
                this.isYearAnimationOpened = false
                this.isYearAnimationClosed = true
                setTimeout(() => {
                    this.isOpenedYear = !this.isOpenedYear
                }, 300)
            } else {
                if (this.isOpenedMonth) {
                    this.openCloseMenuMonth()
                }
                this.isDayAnimationOpened = false
                this.isDayAnimationClosed = true
                this.isYearAnimationOpened = true
                this.isYearAnimationClosed = false
                setTimeout(() => {
                    this.isOpenedYear = !this.isOpenedYear
                    this.$nextTick(() => {
                        const years = this.$refs.years as HTMLElement | null
                        if (years !== null) {
                            years.scrollTop = 116
                        }
                    })
                }, 300)
            }
        },
        open() {
            const icon = (this.$refs.icon as HTMLElement) || undefined
            this.isCalendarPositionTop = icon.getClientRects()[0].y + 376 > window.innerHeight
            if (!this.isOpened) {
                this.isDayAnimationClosed = false
                this.isDayAnimationOpened = true
                this.isOpened = true
                document.addEventListener("keydown", this.esc)
                document.addEventListener("click", this.outside)

                if (this.preliminaryYear !== null && this.preliminaryMonth !== null) {
                    this.renderCalendar()
                }
            } else {
                this.close()
            }
        },
        close() {
            this.isDayAnimationOpened = false
            this.isDayAnimationClosed = true
            setTimeout(() => {
                this.isOpened = false
            }, 200)
            document.removeEventListener("keydown", this.esc)
            document.removeEventListener("click", this.outside)
            if (this.isOpenedYear) {
                this.openCloseMenuYear()
            }
            if (this.isOpenedMonth) {
                this.openCloseMenuMonth()
            }
            if (this.isOpenedTime) {
                this.openCloseMenuTime()
            }
            this.preliminaryYear = this.selectedYear
            this.preliminaryMonth = this.selectedMonth
            this.preliminaryDay = this.selectedDay
        },
        esc(e: KeyboardEvent) {
            if (e.code === "Escape") {
                this.close()
            }
        },
        outside(e: MouseEvent) {
            const icon = this.$refs.icon as HTMLElement
            const calendar = this.$refs.calendar as HTMLElement
            const target = e.target as HTMLElement | null

            if (!icon.contains(target) && !calendar.contains(target)) {
                this.close()
            }
        },
    },
})
</script>

<style lang="scss" scoped>
@import "../styles/colors";
@import "../styles/icons";

.ui-datepicker {
    display: flex;
    align-items: center;
    width: fit-content;
    position: relative;

    & > .icon {
        margin: 0;
        width: 40px;
        height: 40px;
        mask-size: 80%;
        mask-repeat: no-repeat;
        mask-position: center;

        &:hover {
            cursor: pointer;
        }
    }

    & > .calendar {
        display: flex;
        flex-flow: column;
        position: absolute;
        left: 0;
        top: 0;
        background-color: $gray-000;
        border-radius: 5px;
        box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
        z-index: 999999;
        padding: 10px;
        box-sizing: border-box;
        width: 360px;
        margin-top: 50px;
        max-width: 360px;

        &.position-top {
            top: unset;
            bottom: 0;
            margin-bottom: 50px;
        }

        & > .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;

            $headerMonthColor: var(--headerMonthColor);
            $headerMonthHoverColor: var(--headerMonthHoverColor);
            $headerYearColor: var(--headerYearColor);
            $headerYearHoverColor: var(--headerYearHoverColor);
            $headerTimeColor: var(--headerTimeColor);
            $headerTimeHoverColor: var(--headerTimeHoverColor);
            $headerIconColor: var(--headerIconColor);
            $headerIconHoverColor: var(--headerIconHoverColor);

            & > div {
                display: flex;
                align-items: center;
                user-select: none;

                & > span {
                    transition: 0.3s;

                    &.icon {
                        mask-repeat: no-repeat;
                        mask-position: center;
                        margin-right: 0;
                        mask-size: 80%;
                        background-color: $headerIconColor;

                        &.disabled {
                            opacity: 0.5;
                            cursor: not-allowed;
                        }

                        &:last-of-type {
                            margin-left: 10px;
                        }

                        &.close {
                            mask-size: 100%;
                        }
                    }

                    &.year {
                        margin: 0 10px;
                        color: $headerYearColor;
                    }

                    &.month {
                        color: $headerMonthColor;
                    }

                    &.time {
                        color: $headerTimeColor;
                    }

                    &:hover {
                        &:not(.not-select) {
                            &:not(.disabled) {
                                cursor: pointer;

                                &.month {
                                    color: $headerMonthHoverColor;
                                }

                                &.year {
                                    color: $headerYearHoverColor;
                                }

                                &.time {
                                    color: $headerTimeHoverColor;
                                }

                                &.icon {
                                    background-color: $headerIconHoverColor;

                                    &.close {
                                        background-color: $red-500;
                                    }

                                    &.checkmark {
                                        background-color: $green-500;
                                    }
                                }
                            }
                        }
                    }
                }

                & > .month,
                & > .time {
                    position: relative;

                    &.opened {
                        &::before {
                            content: none;
                        }
                    }
                }

                & > .time {
                    &.opened {
                        transition: none;
                    }
                }

                & > .ui-button {
                    &:first-of-type {
                        margin-right: 15px;
                    }
                }

                &:last-of-type {
                    & > .icon {
                        &:not(.checkmark) {
                            &:last-of-type {
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
            }
        }

        & > .months,
        & > .years {
            display: flex;
            flex-wrap: wrap;
            user-select: none;
            transition: opacity 0.3s;
            max-height: 232px;
            overflow: hidden;

            &.animated {
                pointer-events: none;

                & > div {
                    &.preliminary {
                        transition: none;
                    }
                }
            }

            &.closed {
                animation: closed 0.3s ease-in-out both running;
            }

            &.opened {
                z-index: 2;
                animation: opened 0.3s ease-in-out both running;
            }

            & > div {
                box-sizing: border-box;
                padding: 20px 0;
                transition: color 0.3s, background 0.3s;
                width: calc(100% / 3);
                text-align: center;
                height: 58px;

                &:hover {
                    cursor: pointer;
                    background-color: #3f51b511;
                }

                &.preliminary {
                    background-color: $primary-300;
                    color: $gray-000;
                }
            }
        }

        & > .months {
            $monthColor: var(--monthColor);
            $monthHoverColor: var(--monthHoverColor);
            $monthHoverBackground: var(--monthHoverBackground);
            $monthHoverOutline: var(--monthHoverOutline);
            $monthHoverOutlineOffset: var(--monthHoverOutlineOffset);
            $monthBorderRadius: var(--monthBorderRadius);
            $monthSelectedColor: var(--monthSelectedColor);
            $monthSelectedFontWeight: var(--monthSelectedFontWeight);
            $monthSelectedBackground: var(--monthSelectedBackground);
            $monthSelectedOutline: var(--monthSelectedOutline);
            $monthSelectedOutlineOffset: var(--monthSelectedOutlineOffset);

            & > div {
                color: $monthColor;
                border-radius: $monthBorderRadius;

                &:hover {
                    cursor: pointer;
                    background-color: $monthHoverBackground;
                    color: $monthHoverColor;
                    outline: $monthHoverOutline;
                    outline-offset: $monthHoverOutlineOffset;
                }

                &.preliminary {
                    background-color: $monthSelectedBackground;
                    color: $monthSelectedColor;
                    font-weight: $monthSelectedFontWeight;
                    outline: $monthSelectedOutline;
                    outline-offset: $monthSelectedOutlineOffset;
                }
            }
        }

        & > .years {
            $yearColor: var(--yearColor);
            $yearHoverColor: var(--yearHoverColor);
            $yearHoverBackground: var(--yearHoverBackground);
            $yearHoverOutline: var(--yearHoverOutline);
            $yearHoverOutlineOffset: var(--yearHoverOutlineOffset);
            $yearBorderRadius: var(--yearBorderRadius);
            $yearSelectedColor: var(--yearSelectedColor);
            $yearSelectedFontWeight: var(--yearSelectedFontWeight);
            $yearSelectedBackground: var(--yearSelectedBackground);
            $yearSelectedOutline: var(--yearSelectedOutline);
            $yearSelectedOutlineOffset: var(--yearSelectedOutlineOffset);

            & > div {
                color: $yearColor;
                border-radius: $yearBorderRadius;

                &:hover {
                    cursor: pointer;
                    background-color: $yearHoverBackground;
                    color: $yearHoverColor;
                    outline: $yearHoverOutline;
                    outline-offset: $yearHoverOutlineOffset;
                }

                &.preliminary {
                    background-color: $yearSelectedBackground;
                    color: $yearSelectedColor;
                    font-weight: $yearSelectedFontWeight;
                    outline: $yearSelectedOutline;
                    outline-offset: $yearSelectedOutlineOffset;
                }
            }
        }

        & > .times {
            display: flex;
            flex-flow: column;
            transition: opacity 0.3s;
            max-height: 232px;
            overflow: hidden;

            &.closed {
                animation: closed 0.3s ease-in-out both running;
            }

            &.opened {
                z-index: 2;
                animation: opened 0.3s ease-in-out both running;
            }

            & > div {
                display: flex;
                $timeColor: var(--timeColor);
                $timeHoverColor: var(--timeHoverColor);
                $timeHoverBackground: var(--timeHoverBackground);
                $timeHoverOutline: var(--timeHoverOutline);
                $timeHoverOutlineOffset: var(--timeHoverOutlineOffset);
                $timeBorderRadius: var(--timeBorderRadius);
                $timeSelectedColor: var(--timeSelectedColor);
                $timeSelectedFontWeight: var(--timeSelectedFontWeight);
                $timeSelectedBackground: var(--timeSelectedBackground);
                $timeSelectedOutline: var(--timeSelectedOutline);
                $timeSelectedOutlineOffset: var(--timeSelectedOutlineOffset);

                &:first-of-type {
                    padding-bottom: 5px;
                    border-bottom: 1px solid #dcdcff;

                    & > div {
                        text-align: center;
                    }
                }

                &:last-of-type {
                    padding-top: 5px;

                    & > div {
                        max-height: 196px;
                        overflow-y: auto;

                        &::-webkit-scrollbar {
                            width: 5px;
                        }

                        &::-webkit-scrollbar-thumb {
                            background-color: $gray-500;
                        }

                        & > div {
                            color: $timeColor;
                            border-radius: $timeBorderRadius;
                            transition: color 0.3s, background 0.3s;

                            &:hover {
                                cursor: pointer;
                                color: $timeHoverColor;
                                background-color: $timeHoverBackground;
                                outline: $timeHoverOutline;
                                outline-offset: $timeHoverOutlineOffset;
                            }

                            &.preliminary {
                                font-weight: $timeSelectedFontWeight;
                                color: $timeSelectedColor;
                                background-color: $timeSelectedBackground;
                                outline: $timeSelectedOutline;
                                outline-offset: $timeSelectedOutlineOffset;
                            }
                        }
                    }
                }

                & > div {
                    display: flex;
                    flex-flow: column;
                    width: calc(100% / 3);

                    & > div {
                        box-sizing: border-box;
                        padding: 5px 0;
                        transition: 0.3s;
                        text-align: center;
                    }
                }
            }
        }

        & > .days {
            user-select: none;
            transition: opacity 0.3s;

            &.animated {
                pointer-events: none;

                & .day {
                    transition: none;
                }
            }

            &.closed {
                animation: closed 0.3s ease-in-out both running;
            }

            &.opened {
                animation: opened 0.3s ease-in-out both running;
            }

            & > div {
                display: flex;

                $dayColor: var(--dayColor);
                $dayHoverColor: var(--dayHoverColor);
                $dayHoverBackground: var(--dayHoverBackground);
                $dayHoverOutline: var(--dayHoverOutline);
                $dayHoverOutlineOffset: var(--dayHoverOutlineOffset);
                $dayBorderRadius: var(--dayBorderRadius);
                $daySelectedColor: var(--daySelectedColor);
                $daySelectedBackground: var(--daySelectedBackground);
                $daySelectedOutline: var(--daySelectedOutline);
                $daySelectedOutlineOffset: var(--daySelectedOutlineOffset);
                $dayOffColor: var(--dayOffColor);
                $dayOffBackground: var(--dayOffBackground);
                $dayOffOutline: var(--dayOffOutline);
                $dayOffOutlineOffset: var(--dayOffOutlineOffset);
                $dayNotSelectedColor: var(--dayNotSelectedColor);
                $dayNotSelectedBackground: var(--dayNotSelectedBackground);
                $dayNotSelectedOutline: var(--dayNotSelectedOutline);
                $dayNotSelectedOutlineOffset: var(--dayNotSelectedOutlineOffset);
                $todayColor: var(--todayColor);
                $todayBackground: var(--todayBackground);
                $todayOutline: var(--todayOutline);
                $todayOutlineOffset: var(--todayOutlineOffset);
                $dayDisabledColor: var(--dayDisabledColor);
                $dayDisabledBackground: var(--dayDisabledBackground);

                &:first-of-type {
                    flex-wrap: wrap;
                    align-items: center;
                    border-bottom: 1px solid #dcdcff;
                    margin-bottom: 5px;

                    & > div {
                        line-height: 26px;
                        text-align: center;
                        width: calc(100% / 7);
                    }
                }

                &:last-of-type {
                    max-height: 240px;
                    flex-flow: column;
                    overflow: hidden;

                    & > div {
                        display: flex;
                        flex-wrap: wrap;
                    }
                }

                & .day {
                    line-height: 40px;
                    text-align: center;
                    width: calc(100% / 7);
                    transition: color 0.3s, background 0.3s;
                    color: $dayColor;
                    border-radius: $dayBorderRadius;

                    &.day-off {
                        color: $dayOffColor;
                        background-color: $dayOffBackground;
                        outline: $dayOffOutline;
                        outline-offset: $dayOffOutlineOffset;

                        &:hover {
                            color: $dayOffColor;
                        }
                    }

                    &:hover {
                        cursor: pointer;
                        color: $dayHoverColor;
                        background-color: $dayHoverBackground;
                        outline: $dayHoverOutline;
                        outline-offset: $dayHoverOutlineOffset;
                    }

                    &.today {
                        outline: $todayOutline;
                        outline-offset: $todayOutlineOffset;
                        transition: none;
                        color: $todayColor;
                        background-color: $todayBackground;

                        &:not(.selected) {
                            &:hover {
                                color: $dayHoverColor;
                                background-color: $dayHoverBackground;
                                outline: $dayHoverOutline;
                                outline-offset: $dayHoverOutlineOffset;
                            }
                        }
                    }

                    &.selected {
                        outline: $daySelectedOutline;
                        outline-offset: $daySelectedOutlineOffset;
                        background-color: $daySelectedBackground;
                        color: $daySelectedColor;

                        &:hover {
                            color: $daySelectedColor;
                        }
                    }

                    &.not-selected {
                        color: $dayNotSelectedColor;
                        background-color: $dayNotSelectedBackground;
                        outline: $dayNotSelectedOutline;
                        outline-offset: $dayNotSelectedOutlineOffset;

                        &:hover {
                            color: $dayNotSelectedColor;
                            background-color: $dayHoverBackground;
                            outline: $dayHoverOutline;
                            outline-offset: $dayHoverOutlineOffset;
                        }

                        &.selected {
                            outline: $daySelectedOutline;
                            outline-offset: $daySelectedOutlineOffset;
                            background-color: $daySelectedBackground;
                            color: $daySelectedColor;
                        }
                    }

                    &.disabled {
                        background-color: $dayDisabledBackground;
                        cursor: not-allowed;
                        color: $dayDisabledColor;

                        &.day-off {
                            color: $dayOffColor;
                        }

                        &:hover {
                            color: $dayDisabledColor;
                            background-color: $dayDisabledBackground;
                            outline: none;
                            outline-offset: 0;

                            &.day-off {
                                color: $dayOffColor;
                            }

                            &.today {
                                outline: $todayOutline;
                                outline-offset: $todayOutlineOffset;
                                color: $dayDisabledColor;
                                background-color: $dayDisabledBackground;
                            }
                        }

                        &.not-selected {
                            color: $dayNotSelectedColor;
                        }
                    }
                }
            }
        }
    }
}

@keyframes opened {
    0% {
        opacity: 0;
        transform: scale(1.2);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes closed {
    0% {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0;
        transform: scale(0.8);
    }
}
</style>
