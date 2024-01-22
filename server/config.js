/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
let prizes = [
  {
    type: 0,
    count: 0,
    title: "",
    text: "人品测试"
  },
  {
    type: 1,
    count: 10,
    text: "一等奖",
    title: "Air Pods",
    img: "../img/airpods.jpg"
  },
  {
    type: 2,
    count: 20,
    text: "二等奖",
    title: "范思哲香水",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 30,
    text: "三等奖",
    title: "眼部按摩仪",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 100,
    text: "四等奖",
    title: "食品礼盒",
    img: "../img/ipad.jpg"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 5, 5, 5, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "MoShang";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
