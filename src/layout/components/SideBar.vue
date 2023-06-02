<template>
	<div class="sidebar">
		<el-row>
			<el-col>
				<h5 class="sidebar-title">首页</h5>
				<el-menu
					default-active="1"
					active-text-color="000"
					@open="handleOpen"
					@close="handleClose"
				>
					<el-sub-menu index="1">
						<template #title>
							<span>用户管理</span>
							<el-icon><CaretBottom /></el-icon>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">用户列表</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-sub-menu index="2">
						<template #title>
							<span>游戏管理</span>
                            <el-icon><CaretBottom /></el-icon>
						</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">分类管理</el-menu-item>
							<el-menu-item index="2-2">游戏管理</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script setup lang="ts">
import { CaretBottom } from "@element-plus/icons-vue"
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
$sidebar-active: #f2f2f2;
.sidebar {
	height: 100%;
	width: 200px;
	&-title {
		margin: 0;
		height: 56px;
		text-align: center;
		line-height: 56px;
		font-size: 16px;
		color: #a2a2a2;
		background-color: $sidebar-active;
	}
}

::v-deep {
	.el-sub-menu__title {
        // justify-content: center;
        padding-left: 40px !important;
		background-color: $sidebar-active;
	}
	// .el-menu-item {
	// 	// justify-content: center;
	// }
	.el-menu-item-group__title {
		display: none;
	}
	.el-sub-menu__icon-arrow {
		display: none;
	}
}
</style>
