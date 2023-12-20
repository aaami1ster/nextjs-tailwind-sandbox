'use client'
import { scopedSlotType } from "./types";

export const countryScopedSlots: scopedSlotType = {
    continent: (item: any) =>
      item.continent && item.continent.name ? item.continent.name : "",
    // 'createdAt': (item: any) => (item.createdAt ? moment(item.createdAt).format() : ''),
    // 'updatedAt': (item: any) => (item.updatedAt ? moment(item.updatedAt).format() : ''),
  };