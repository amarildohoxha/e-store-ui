import {Paging} from "../app/helper/paging.helper";

export class GenericRequest {

  private id: number;
  private name: string;
  private active: boolean;
  private paging: Paging = new Paging();

  constructor(name?: string);

  constructor(name: string) {
    this.name = name;
  }


  /**
   * Getter $id
   * @return {number}
   */
  public get $id(): number {
    return this.id;
  }

  /**
   * Setter $id
   * @param {number} value
   */
  public set $id(value: number) {
    this.id = value;
  }

  /**
   * Getter $name
   * @return {string}
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Setter $name
   * @param {string} value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Getter $active
   * @return {boolean}
   */
  public get $active(): boolean {
    return this.active;
  }

  /**
   * Setter $active
   * @param {boolean} value
   */
  public set $active(value: boolean) {
    this.active = value;
  }

  /**
   * Getter $paging
   * @return {Paging }
   */
  public get $paging(): Paging {
    return this.paging;
  }

  /**
   * Setter $paging
   * @param {Paging } value
   */
  public set $paging(value: Paging) {
    this.paging = value;
  }

}
