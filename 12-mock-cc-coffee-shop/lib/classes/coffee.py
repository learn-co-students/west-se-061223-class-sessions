from classes.order import Order


class Coffee:
    def __init__(self, name):
        self.name = name

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, value):
        if isinstance(value, str) and not hasattr(self, "name"):
            self._name = value
        else:
            raise Exception("invalid operation")

    def orders(self):
        return [order for order in Order.all if order.coffee == self]

    def customers(self):
        pass

    def num_orders(self):
        pass

    def average_price(self):
        pass
