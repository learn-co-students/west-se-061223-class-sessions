from classes.result import Result


class Game:
    def __init__(self, title):
        self.title = title

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, title):
        if isinstance(title, str) and len(title) > 0 and not hasattr(self, "title"):
            self._title = title
        else:
            raise Exception

    def results(self):
        return [result for result in Result.all if result.game == self]  # like a filter

    def players(self):
        return [result.player for result in self.results()]  # like a map

    def average_score(self, player):
        player_scores = [res.score for res in self.results() if res.player == player]
        if player_scores:
            return sum(player_scores) / len(player_scores)
        return 0
