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
  private application_root: string = "application/";

  /** Raiz de relatórios */
  private report_root: string = "report/";

  //#endregion

  //#region Constructor
  constructor(
    private router: Router
  ) {

  }
  //#endregion

  //#region Members

  /**
   * @description Retorna os items de menu para cadastros
   * @returns {MenuItem} Item de menu
   */
  public getManagerItem(): MenuItem {
    const root: MenuItem = {
      label: "Gerenciamento",
      icon: PrimeIcons.LIST,
      routerLink: "manager",
      tooltip: "Cadastre e organize os dados que estruturam seu controle financeiro.",
      items: [
        this.createMenuItem("Contas fixas", PrimeIcons.WALLET, "Clique aqui para registrar despesas mensais recorrentes, como aluguel, internet, assinaturas, entre outros.", this.manager_root + "fixedExpense"),

        this.createMenuItem("Compras Gerais", PrimeIcons.DOLLAR, "Clique aqui para registrar aquele gasto separado que houve ao decorrer do mês", this.manager_root + "generalExpense"),

        this.createMenuItem("Compras no cartão de crédito", PrimeIcons.CREDIT_CARD, "Clique aqui para cadastrar e visualizar suas compras no cartão de crédito e criar parcelas automaticamente.", this.manager_root + "creditTransaction")
      ]
    };

    return root;
  }

  /**
   * @description Retorna os items de menu para aplicação
   * @returns {MenuItem} Item de menu
   */
  public getApplicationItem(): MenuItem {
    const root: MenuItem = {
      label: "Financeiro",
      icon: PrimeIcons.DESKTOP,
      routerLink: "application",
      tooltip: "Gerencie suas movimentações financeiras, acompanhe seus gastos.",
      items: [
        this.createMenuItem("Gerenciamento de parcelas", PrimeIcons.FILE_CHECK, "Clique aqui para gerenciar e visualizar suas parcelas que foram geradas automaticamente e que estão pendentes", this.application_root + "installment")
      ]
    };

    return root;
  }

  /**
   * @description Retorna os items de menu para aplicação
   * @returns {MenuItem} Item de menu
   */
  public getReportItem(): MenuItem {
    const root: MenuItem = {
      label: "Relatórios",
      icon: PrimeIcons.FILE,
      routerLink: "report",
      tooltip: " alguma coisa ai",
      items: [
        // this.createMenuItem("Parcelas", PrimeIcons.FILE_CHECK, "Pague parcelas", this.application_root + "installment")
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
      this.getManagerItem(),
      this.getApplicationItem(),
      // this.getReportItem()
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

  /**
   * @description Navega para a página principal
   * @returns {void} void
   */
  public navigateToHome(): void {
    this.router.navigate(["home"]);
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
