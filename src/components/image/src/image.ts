import { buildProps, definePropType, isNumber, mutable } from '../utils'
import type { ExtractPropTypes } from 'vue'

export const imageProps = buildProps({
  hideOnClickModal: Boolean,
  src: {
    type: String,
    default: '',
  },
  fit: {
    type: String,
    values: ['', 'contain', 'cover', 'fill', 'none', 'scale-down'],
    default: '',
  },
  loading: {
    type: String,
    values: ['eager', 'lazy'],
  },
  lazy: Boolean,
  scrollContainer: {
    type: definePropType<string | HTMLElement | undefined>([String, Object]),
  },
  previewSrcList: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  previewTeleported: Boolean,
  zIndex: {
    type: Number,
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
  infinite: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  zoomRate: {
    type: Number,
    default: 1.2,
  },
  minScale: {
    type: Number,
    default: 0.2,
  },
  maxScale: {
    type: Number,
    default: 7,
  },
} as const)
export type ImageProps = ExtractPropTypes<typeof imageProps>

export const imageEmits = {
  load: (evt: Event) => evt instanceof Event,
  error: (evt: Event) => evt instanceof Event,
  switch: (val: number) => isNumber(val),
  close: () => true,
  show: () => true,
}
export type ImageEmits = typeof imageEmits
