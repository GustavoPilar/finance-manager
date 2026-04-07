import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem, PrimeIcons } from "primeng/api";

@Injectable({
  providedIn: "root"
})
export class MenuSelectionService {

  //#region Fields

  /** Raiz de gerenciamento */
  private manager_root: string = "manager/list/";

  /** Raiz de aplicação */
  private application_root: string = "application/list/";

  //#endregion

  //#region Constructor
  constructor(
  ) {

  }
  //#endregion

  //#region Members

  /**
   * @description Retorna os items de menu para gerenciamento
   * @returns {MenuItem} Item de menu
   */
  public getManagerItem(): MenuItem {
    const root: MenuItem = {
      label: "Cadastros",
      icon: PrimeIcons.LIST,
      routerLink: "manager",
      items: [
        this.createMenuItem("Usuários", PrimeIcons.USERS, "Cadastre usuários", this.manager_root + "user"),

        this.createMenuItem("Bancos", PrimeIcons.BUILDING_COLUMNS, "Cadastre bancos", this.manager_root + "bank"),

        this.createMenuItem("Cartão de crédito", PrimeIcons.CREDIT_CARD, "Cadastre cartões de créditos", this.manager_root + "creditCard"),

        this.createMenuItem("Financiamentos", PrimeIcons.CAR, "Cadastre financiamentos", this.manager_root + "financing")
      ]
    };

    return root;
  }

  /**
   * @description Retorna todos os itens de menu
   * @returns {MenuItem[]} Lista de itens de menu
   */
  public getMenuItems(): MenuItem[] {
    return [
      this.getManagerItem()
    ]
  }

  /**
   * @description Retorna todos os filhos de cada raiz juntos
   * @returns {MenuItem} Lista de itens de menu
   */
  public getChildren(): MenuItem[] {
    const roots: MenuItem[] = this.getMenuItems();
    let children: MenuItem[] = [];

    /**
     * @description Se for filho adiciona a lista, e se tiver filhos faz a mesma coisa para cada um
     * @param child Criança
     * @param isRoot É raiz?
     */
    const getChild = (child: MenuItem, isRoot: boolean = false) => {
      if (!isRoot)
        children = [...children, child];

      if (child.items) {
        child.items.forEach((i: MenuItem) => {
          getChild(i);
        });
      }
    };

    roots.forEach((child: MenuItem) => {
      getChild(child, true);
    });

    return children;
  }

  //#endregion

  //#region Utils

  /**
   * @description Função auxiliar para a criação de um item de menu
   * @param label Nome do item
   * @param icon Ícone do item
   * @param tooltip Texto descritivo
   * @param route Rota
   * @returns {MenuItem} Item de menu
   */
  private createMenuItem(label: string, icon: string, tooltip: string, route: string): MenuItem {
    return {
      label,
      icon,
      tooltip,
      routerLink: route
    }
  }

  //#endregion
}
