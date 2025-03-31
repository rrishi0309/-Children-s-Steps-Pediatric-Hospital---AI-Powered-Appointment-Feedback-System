import __ from 'lodash'
import _uuid from 'uuid'
import _moment from 'moment/moment'
import _papaparse from 'papaparse'
import _numbro from 'numbro/numbro'
import _i18n from 'i18n'
declare global {
const _: typeof __
const uuid: typeof _uuid
const moment: typeof _moment
const papaparse: typeof _papaparse
const numbro: typeof _numbro
const i18n: typeof _i18n
}