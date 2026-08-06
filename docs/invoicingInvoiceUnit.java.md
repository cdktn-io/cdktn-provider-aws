# `invoicingInvoiceUnit` Submodule <a name="`invoicingInvoiceUnit` Submodule" id="@cdktn/provider-aws.invoicingInvoiceUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InvoicingInvoiceUnit <a name="InvoicingInvoiceUnit" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit aws_invoicing_invoice_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnit;

InvoicingInvoiceUnit.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .invoiceReceiver(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<InvoicingInvoiceUnitRule>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taxInheritanceDisabled(java.lang.Boolean|IResolvable)
//  .timeouts(InvoicingInvoiceUnitTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.invoiceReceiver">invoiceReceiver</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>></code> | rule block. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.taxInheritanceDisabled">taxInheritanceDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `invoiceReceiver`<sup>Required</sup> <a name="invoiceReceiver" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.invoiceReceiver"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#region InvoicingInvoiceUnit#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.rule"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#rule InvoicingInvoiceUnit#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}.

---

##### `taxInheritanceDisabled`<sup>Optional</sup> <a name="taxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.taxInheritanceDisabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#timeouts InvoicingInvoiceUnit#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled">resetTaxInheritanceDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule"></a>

```java
public void putRule(IResolvable|java.util.List<InvoicingInvoiceUnitRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putRule.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts"></a>

```java
public void putTimeouts(InvoicingInvoiceUnitTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetRule"></a>

```java
public void resetRule()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTags"></a>

```java
public void resetTags()
```

##### `resetTaxInheritanceDisabled` <a name="resetTaxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTaxInheritanceDisabled"></a>

```java
public void resetTaxInheritanceDisabled()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InvoicingInvoiceUnit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnit;

InvoicingInvoiceUnit.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnit;

InvoicingInvoiceUnit.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnit;

InvoicingInvoiceUnit.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnit;

InvoicingInvoiceUnit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),InvoicingInvoiceUnit.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a InvoicingInvoiceUnit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the InvoicingInvoiceUnit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing InvoicingInvoiceUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the InvoicingInvoiceUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList">InvoicingInvoiceUnitRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference">InvoicingInvoiceUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput">invoiceReceiverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput">ruleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput">taxInheritanceDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver">invoiceReceiver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled">taxInheritanceDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.rule"></a>

```java
public InvoicingInvoiceUnitRuleList getRule();
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList">InvoicingInvoiceUnitRuleList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeouts"></a>

```java
public InvoicingInvoiceUnitTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference">InvoicingInvoiceUnitTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `invoiceReceiverInput`<sup>Optional</sup> <a name="invoiceReceiverInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiverInput"></a>

```java
public java.lang.String getInvoiceReceiverInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.ruleInput"></a>

```java
public IResolvable|java.util.List<InvoicingInvoiceUnitRule> getRuleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taxInheritanceDisabledInput`<sup>Optional</sup> <a name="taxInheritanceDisabledInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTaxInheritanceDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.timeoutsInput"></a>

```java
public IResolvable|InvoicingInvoiceUnitTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `invoiceReceiver`<sup>Required</sup> <a name="invoiceReceiver" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.invoiceReceiver"></a>

```java
public java.lang.String getInvoiceReceiver();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `taxInheritanceDisabled`<sup>Required</sup> <a name="taxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.taxInheritanceDisabled"></a>

```java
public java.lang.Boolean|IResolvable getTaxInheritanceDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnit.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### InvoicingInvoiceUnitConfig <a name="InvoicingInvoiceUnitConfig" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnitConfig;

InvoicingInvoiceUnitConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .invoiceReceiver(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .region(java.lang.String)
//  .rule(IResolvable|java.util.List<InvoicingInvoiceUnitRule>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .taxInheritanceDisabled(java.lang.Boolean|IResolvable)
//  .timeouts(InvoicingInvoiceUnitTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver">invoiceReceiver</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule">rule</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>></code> | rule block. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled">taxInheritanceDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `invoiceReceiver`<sup>Required</sup> <a name="invoiceReceiver" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.invoiceReceiver"></a>

```java
public java.lang.String getInvoiceReceiver();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#invoice_receiver InvoicingInvoiceUnit#invoice_receiver}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#name InvoicingInvoiceUnit#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#description InvoicingInvoiceUnit#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#region InvoicingInvoiceUnit#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.rule"></a>

```java
public IResolvable|java.util.List<InvoicingInvoiceUnitRule> getRule();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#rule InvoicingInvoiceUnit#rule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#tags InvoicingInvoiceUnit#tags}.

---

##### `taxInheritanceDisabled`<sup>Optional</sup> <a name="taxInheritanceDisabled" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.taxInheritanceDisabled"></a>

```java
public java.lang.Boolean|IResolvable getTaxInheritanceDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#tax_inheritance_disabled InvoicingInvoiceUnit#tax_inheritance_disabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitConfig.property.timeouts"></a>

```java
public InvoicingInvoiceUnitTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#timeouts InvoicingInvoiceUnit#timeouts}

---

### InvoicingInvoiceUnitRule <a name="InvoicingInvoiceUnitRule" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.Initializer"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnitRule;

InvoicingInvoiceUnitRule.builder()
    .linkedAccounts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts">linkedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}. |

---

##### `linkedAccounts`<sup>Required</sup> <a name="linkedAccounts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule.property.linkedAccounts"></a>

```java
public java.util.List<java.lang.String> getLinkedAccounts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#linked_accounts InvoicingInvoiceUnit#linked_accounts}.

---

### InvoicingInvoiceUnitTimeouts <a name="InvoicingInvoiceUnitTimeouts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnitTimeouts;

InvoicingInvoiceUnitTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#create InvoicingInvoiceUnit#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#delete InvoicingInvoiceUnit#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/invoicing_invoice_unit#update InvoicingInvoiceUnit#update}

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingInvoiceUnitRuleList <a name="InvoicingInvoiceUnitRuleList" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnitRuleList;

new InvoicingInvoiceUnitRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get"></a>

```java
public InvoicingInvoiceUnitRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleList.property.internalValue"></a>

```java
public IResolvable|java.util.List<InvoicingInvoiceUnitRule> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>>

---


### InvoicingInvoiceUnitRuleOutputReference <a name="InvoicingInvoiceUnitRuleOutputReference" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnitRuleOutputReference;

new InvoicingInvoiceUnitRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput">linkedAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts">linkedAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `linkedAccountsInput`<sup>Optional</sup> <a name="linkedAccountsInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccountsInput"></a>

```java
public java.util.List<java.lang.String> getLinkedAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `linkedAccounts`<sup>Required</sup> <a name="linkedAccounts" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.linkedAccounts"></a>

```java
public java.util.List<java.lang.String> getLinkedAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRuleOutputReference.property.internalValue"></a>

```java
public IResolvable|InvoicingInvoiceUnitRule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitRule">InvoicingInvoiceUnitRule</a>

---


### InvoicingInvoiceUnitTimeoutsOutputReference <a name="InvoicingInvoiceUnitTimeoutsOutputReference" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.invoicing_invoice_unit.InvoicingInvoiceUnitTimeoutsOutputReference;

new InvoicingInvoiceUnitTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|InvoicingInvoiceUnitTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.invoicingInvoiceUnit.InvoicingInvoiceUnitTimeouts">InvoicingInvoiceUnitTimeouts</a>

---



