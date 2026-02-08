# `dataAwsSavingsplansSavingsPlan` Submodule <a name="`dataAwsSavingsplansSavingsPlan` Submodule" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSavingsplansSavingsPlan <a name="DataAwsSavingsplansSavingsPlan" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan aws_savingsplans_savings_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer"></a>

```typescript
import { dataAwsSavingsplansSavingsPlan } from '@cdktn/provider-aws'

new dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan(scope: Construct, id: string, config: DataAwsSavingsplansSavingsPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig">DataAwsSavingsplansSavingsPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig">DataAwsSavingsplansSavingsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct"></a>

```typescript
import { dataAwsSavingsplansSavingsPlan } from '@cdktn/provider-aws'

dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement"></a>

```typescript
import { dataAwsSavingsplansSavingsPlan } from '@cdktn/provider-aws'

dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource"></a>

```typescript
import { dataAwsSavingsplansSavingsPlan } from '@cdktn/provider-aws'

dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport"></a>

```typescript
import { dataAwsSavingsplansSavingsPlan } from '@cdktn/provider-aws'

dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSavingsplansSavingsPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSavingsplansSavingsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSavingsplansSavingsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSavingsplansSavingsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.commitment">commitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.ec2InstanceFamily">ec2InstanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.offeringId">offeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.paymentOption">paymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.productTypes">productTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.purchaseTime">purchaseTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.recurringPaymentAmount">recurringPaymentAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.returnableUntil">returnableUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanArn">savingsPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanOfferingId">savingsPlanOfferingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanType">savingsPlanType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.termDurationInSeconds">termDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.upfrontPaymentAmount">upfrontPaymentAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanIdInput">savingsPlanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanId">savingsPlanId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.commitment"></a>

```typescript
public readonly commitment: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ec2InstanceFamily`<sup>Required</sup> <a name="ec2InstanceFamily" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.ec2InstanceFamily"></a>

```typescript
public readonly ec2InstanceFamily: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

---

##### `paymentOption`<sup>Required</sup> <a name="paymentOption" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.paymentOption"></a>

```typescript
public readonly paymentOption: string;
```

- *Type:* string

---

##### `productTypes`<sup>Required</sup> <a name="productTypes" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.productTypes"></a>

```typescript
public readonly productTypes: string[];
```

- *Type:* string[]

---

##### `purchaseTime`<sup>Required</sup> <a name="purchaseTime" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.purchaseTime"></a>

```typescript
public readonly purchaseTime: string;
```

- *Type:* string

---

##### `recurringPaymentAmount`<sup>Required</sup> <a name="recurringPaymentAmount" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.recurringPaymentAmount"></a>

```typescript
public readonly recurringPaymentAmount: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `returnableUntil`<sup>Required</sup> <a name="returnableUntil" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.returnableUntil"></a>

```typescript
public readonly returnableUntil: string;
```

- *Type:* string

---

##### `savingsPlanArn`<sup>Required</sup> <a name="savingsPlanArn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanArn"></a>

```typescript
public readonly savingsPlanArn: string;
```

- *Type:* string

---

##### `savingsPlanOfferingId`<sup>Required</sup> <a name="savingsPlanOfferingId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanOfferingId"></a>

```typescript
public readonly savingsPlanOfferingId: string;
```

- *Type:* string

---

##### `savingsPlanType`<sup>Required</sup> <a name="savingsPlanType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanType"></a>

```typescript
public readonly savingsPlanType: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `termDurationInSeconds`<sup>Required</sup> <a name="termDurationInSeconds" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.termDurationInSeconds"></a>

```typescript
public readonly termDurationInSeconds: number;
```

- *Type:* number

---

##### `upfrontPaymentAmount`<sup>Required</sup> <a name="upfrontPaymentAmount" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.upfrontPaymentAmount"></a>

```typescript
public readonly upfrontPaymentAmount: string;
```

- *Type:* string

---

##### `savingsPlanIdInput`<sup>Optional</sup> <a name="savingsPlanIdInput" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanIdInput"></a>

```typescript
public readonly savingsPlanIdInput: string;
```

- *Type:* string

---

##### `savingsPlanId`<sup>Required</sup> <a name="savingsPlanId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.savingsPlanId"></a>

```typescript
public readonly savingsPlanId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSavingsplansSavingsPlanConfig <a name="DataAwsSavingsplansSavingsPlanConfig" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.Initializer"></a>

```typescript
import { dataAwsSavingsplansSavingsPlan } from '@cdktn/provider-aws'

const dataAwsSavingsplansSavingsPlanConfig: dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.savingsPlanId">savingsPlanId</a></code> | <code>string</code> | The ID of the Savings Plan. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `savingsPlanId`<sup>Required</sup> <a name="savingsPlanId" id="@cdktn/provider-aws.dataAwsSavingsplansSavingsPlan.DataAwsSavingsplansSavingsPlanConfig.property.savingsPlanId"></a>

```typescript
public readonly savingsPlanId: string;
```

- *Type:* string

The ID of the Savings Plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/savingsplans_savings_plan#savings_plan_id DataAwsSavingsplansSavingsPlan#savings_plan_id}

---



