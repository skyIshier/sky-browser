<template>
  <div ref="dropZoneRef" class="dropZone" :class="dropAcceptance" @click="triggerFileInput">
    <span class="dropText">{{ dropText }}</span>
    <!-- 新增按钮和隐藏文件输入 -->
    <input
      ref="fileInput"
      type="file"
      style="display: none"
      @change="handleFileSelect"
      :accept="props.type"
    />
    <button @click.stop="triggerFileInput" class="mobile-upload-btn">
      选择 APK 文件
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDropZone } from '@vueuse/core'

export interface DropOverlayProps {
  /** optional mime type of acceptable files.
   * Use `accept` and `reject` props to show validation response text */
  type?: string
  /** file drop indicator text */
  prompt: string
  /** file drop acceptable indicator text */
  accept: string
  /** file drop rejected indicator text */
  reject: string
}

const emit = defineEmits<{
  file: [file: File]
}>()

const props = withDefaults(defineProps<DropOverlayProps>(), {
  prompt: 'Drop File',
  accept: 'OK',
  reject: 'Invalid!',
})

/* --- refs --- */
const dropZoneRef = ref<HTMLDivElement>()
const fileInput = ref<HTMLInputElement>()
const dropAcceptance = ref<'dropWait'|'dropAccept'|'dropDeny'>('dropWait')

/* --- computed --- */
const dropText = computed(() => {
  if (dropAcceptance.value === 'dropWait') return props.prompt
  if (dropAcceptance.value === 'dropAccept') return props.accept
  return props.reject
})

/* --- functions --- */
async function onDrop(files: File[] | null) {
  dropAcceptance.value = 'dropWait'
  if (files === null) return
  if (!checkDropAcceptance(files.map(file => file.type))) return
  const file = files[0]
  emit('file', file)
}

useDropZone(dropZoneRef, {
  onDrop,
  dataTypes (files) {
    if (checkDropAcceptance(files)) {
      dropAcceptance.value = 'dropAccept'
      return true
    } else {
      dropAcceptance.value = 'dropDeny'
      return true
    }
  },
  onLeave: () => dropAcceptance.value = 'dropWait'
})

function checkDropAcceptance (files: readonly string[]) {
  if (props.type === undefined) return true
  return files.length === 1 && files[0] === props.type
}

// 新增：触发文件选择
function triggerFileInput() {
  fileInput.value?.click()
}

// 新增：处理文件选择
function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const file = input.files[0]
    // 检查类型
    if (props.type && file.type !== props.type) {
      // 类型不匹配，可以短暂显示拒绝样式
      dropAcceptance.value = 'dropDeny'
      setTimeout(() => { dropAcceptance.value = 'dropWait' }, 1000)
      return
    }
    emit('file', file)
    // 重置 input 以便再次选择同一个文件
    input.value = ''
  }
}
</script>

<style scoped>
.dropZone {
  flex-grow: 1;
  display: flex;
  flex-direction: column; /* 改为列布局，让按钮显示在下方 */
  height: calc(100% - 4em);
  width: calc(100% - 4em);
  padding: 1em;
  border-radius: 5em;
  border: 1em skyblue dashed;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer; /* 提示可点击 */
}
.dropAccept { border-color: #50bb44; }
.dropWait { border-color: #48B; }
.dropDeny { border-color: #bb4444; }
.dropText {
  pointer-events:none;
  user-select: none;
  font-family: 'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif;
  font-size: 20px; /* fallback */
  font-size: 2em;
  margin-bottom: 0.5em; /* 给按钮留空间 */
}
.mobile-upload-btn {
  display: inline-block;
  padding: 12px 24px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px auto;
  width: 80%;
  max-width: 300px;
  text-align: center;
  pointer-events: auto; /* 确保按钮可点击 */
}
.mobile-upload-btn:hover {
  background-color: #33a06f;
}
</style>