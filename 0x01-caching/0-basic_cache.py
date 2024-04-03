#!/usr/bin/env python3

from base_caching import BaseCaching


class BasicCache(BaseCaching):
	def put(self, key, item):
		if key and item:
			self.cache_data[key] = item
		else:
			return None

	def get(self, key):
		if key in self.cache_data:
			return self.cache_data[key]
		else:
			return None