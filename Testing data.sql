SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE `blog`.`materials`;
TRUNCATE TABLE `blog`.`categories`;
TRUNCATE TABLE `blog`.`banners`;
TRUNCATE TABLE `blog`.`imgs`;
TRUNCATE TABLE `blog`.`infos`;
TRUNCATE TABLE `blog`.`widgets`;
SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO `blog`.`imgs`
(`img_id`,
`name`,
`file_name`,
`file_path`)
VALUES
(1,
'sport_header',
'boll',
'/img/');

INSERT INTO `blog`.`imgs`
(`img_id`,
`name`,
`file_name`,
`file_path`)
VALUES
(2,
'sport_previwe',
'sport_pict',
'/img/');

INSERT INTO `blog`.`imgs`
(`img_id`,
`name`,
`file_name`,
`file_path`)
VALUES
(3,
'banner 1',
'banner1',
'/img/banners/');

INSERT INTO `blog`.`imgs`
(`img_id`,
`name`,
`file_name`,
`file_path`)
VALUES
(4,
'banner 2',
'banner2',
'/img/banners/');

INSERT INTO `blog`.`imgs`
(`img_id`,
`name`,
`file_name`,
`file_path`)
VALUES
(5,
'banner 3',
'banner3',
'/img/banners/');

INSERT INTO `blog`.`imgs`
(`img_id`,
`name`,
`file_name`,
`file_path`)
VALUES
(6,
'snow_tricks',
'snow_tricks',
'/img/');

INSERT INTO `blog`.`categories`
(`category_id`,
`name`,
`title`,
`discription`,
`content`,
`header_img_id`,
`previwe_img_id`)
VALUES
(1,
'sport',
'Sport',
'Discription sport category',
'',
1,
2);

INSERT INTO `blog`.`categories`
(`category_id`,
`name`,
`title`,
`discription`,
`content`,
`header_img_id`,
`previwe_img_id`)
VALUES
(2,
'music',
'Music',
'Discription music category',
'',
1,
2);

INSERT INTO `blog`.`materials`
(`material_id`,
`name`,
`title`,
`discription`,
`content`,
`img_id`,
`category_id`)
VALUES
(2,
'snowboard_tricks',
'Awesom snowboard tricks',
'Last week we posted a set of butter tutorials from Ryan Knapton, who may well be the snowboard equivalent of a ghost gliding serenely over the hill.',
'',
6,
1);

INSERT INTO `blog`.`banners`
(`banner_id`,
`slot`,
`url`,
`text`,
`img_id`)
VALUES
(1,
1,
'http://qweasd.ru',
'Click me',
3);

INSERT INTO `blog`.`banners`
(`banner_id`,
`slot`,
`url`,
`text`,
`img_id`)
VALUES
(2,
1,
'http://asdfds.com',
'Click me fast',
4);

INSERT INTO `blog`.`banners`
(`banner_id`,
`slot`,
`url`,
`text`,
`img_id`)
VALUES
(3,
1,
'http://zxcfgd.info',
'Click me please',
5);

INSERT INTO `blog`.`infos`
(`info_id`,
`slot`,
`text`)
VALUES
(1,
1,
'Very important info');

INSERT INTO `blog`.`infos`
(`info_id`,
`slot`,
`text`)
VALUES
(2,
2,
'Borring info');

INSERT INTO `blog`.`widgets`
(`widget_id`,
`page_table`,
`page_id`,
`widget_table`,
`concrete_widget_id`)
VALUES
(1,
'category',
1,
'banner',
1);

INSERT INTO `blog`.`widgets`
(`widget_id`,
`page_table`,
`page_id`,
`widget_table`,
`concrete_widget_id`)
VALUES
(2,
'material',
2,
'banner',
2);

INSERT INTO `blog`.`widgets`
(`widget_id`,
`page_table`,
`page_id`,
`widget_table`,
`concrete_widget_id`)
VALUES
(3,
'material',
2,
'info',
1);

INSERT INTO `blog`.`widgets`
(`widget_id`,
`page_table`,
`page_id`,
`widget_table`,
`concrete_widget_id`)
VALUES
(4,
'material',
2,
'info',
2);

