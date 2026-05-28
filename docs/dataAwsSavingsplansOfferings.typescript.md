# `dataAwsSavingsplansOfferings` Submodule <a name="`dataAwsSavingsplansOfferings` Submodule" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSavingsplansOfferings <a name="DataAwsSavingsplansOfferings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings aws_savingsplans_offerings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

new dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings(scope: Construct, id: string, config?: DataAwsSavingsplansOfferingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig">DataAwsSavingsplansOfferingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig">DataAwsSavingsplansOfferingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetCurrencies">resetCurrencies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDescriptions">resetDescriptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDurations">resetDurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOfferingIds">resetOfferingIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPaymentOptions">resetPaymentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPlanTypes">resetPlanTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetProductType">resetProductType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetServiceCodes">resetServiceCodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetUsageTypes">resetUsageTypes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsSavingsplansOfferingsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]

---

##### `resetCurrencies` <a name="resetCurrencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetCurrencies"></a>

```typescript
public resetCurrencies(): void
```

##### `resetDescriptions` <a name="resetDescriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDescriptions"></a>

```typescript
public resetDescriptions(): void
```

##### `resetDurations` <a name="resetDurations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetDurations"></a>

```typescript
public resetDurations(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetOfferingIds` <a name="resetOfferingIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOfferingIds"></a>

```typescript
public resetOfferingIds(): void
```

##### `resetOperations` <a name="resetOperations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetPaymentOptions` <a name="resetPaymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPaymentOptions"></a>

```typescript
public resetPaymentOptions(): void
```

##### `resetPlanTypes` <a name="resetPlanTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetPlanTypes"></a>

```typescript
public resetPlanTypes(): void
```

##### `resetProductType` <a name="resetProductType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetProductType"></a>

```typescript
public resetProductType(): void
```

##### `resetServiceCodes` <a name="resetServiceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetServiceCodes"></a>

```typescript
public resetServiceCodes(): void
```

##### `resetUsageTypes` <a name="resetUsageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.resetUsageTypes"></a>

```typescript
public resetUsageTypes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSavingsplansOfferings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsSavingsplansOfferings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSavingsplansOfferings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSavingsplansOfferings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSavingsplansOfferings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList">DataAwsSavingsplansOfferingsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offerings">offerings</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList">DataAwsSavingsplansOfferingsOfferingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currenciesInput">currenciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptionsInput">descriptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durationsInput">durationsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIdsInput">offeringIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operationsInput">operationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptionsInput">paymentOptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypesInput">planTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productTypeInput">productTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodesInput">serviceCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypesInput">usageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currencies">currencies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptions">descriptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durations">durations</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIds">offeringIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operations">operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptions">paymentOptions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypes">planTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productType">productType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodes">serviceCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypes">usageTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filter"></a>

```typescript
public readonly filter: DataAwsSavingsplansOfferingsFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList">DataAwsSavingsplansOfferingsFilterList</a>

---

##### `offerings`<sup>Required</sup> <a name="offerings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offerings"></a>

```typescript
public readonly offerings: DataAwsSavingsplansOfferingsOfferingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList">DataAwsSavingsplansOfferingsOfferingsList</a>

---

##### `currenciesInput`<sup>Optional</sup> <a name="currenciesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currenciesInput"></a>

```typescript
public readonly currenciesInput: string[];
```

- *Type:* string[]

---

##### `descriptionsInput`<sup>Optional</sup> <a name="descriptionsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptionsInput"></a>

```typescript
public readonly descriptionsInput: string[];
```

- *Type:* string[]

---

##### `durationsInput`<sup>Optional</sup> <a name="durationsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durationsInput"></a>

```typescript
public readonly durationsInput: number[];
```

- *Type:* number[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsSavingsplansOfferingsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]

---

##### `offeringIdsInput`<sup>Optional</sup> <a name="offeringIdsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIdsInput"></a>

```typescript
public readonly offeringIdsInput: string[];
```

- *Type:* string[]

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operationsInput"></a>

```typescript
public readonly operationsInput: string[];
```

- *Type:* string[]

---

##### `paymentOptionsInput`<sup>Optional</sup> <a name="paymentOptionsInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptionsInput"></a>

```typescript
public readonly paymentOptionsInput: string[];
```

- *Type:* string[]

---

##### `planTypesInput`<sup>Optional</sup> <a name="planTypesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypesInput"></a>

```typescript
public readonly planTypesInput: string[];
```

- *Type:* string[]

---

##### `productTypeInput`<sup>Optional</sup> <a name="productTypeInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productTypeInput"></a>

```typescript
public readonly productTypeInput: string;
```

- *Type:* string

---

##### `serviceCodesInput`<sup>Optional</sup> <a name="serviceCodesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodesInput"></a>

```typescript
public readonly serviceCodesInput: string[];
```

- *Type:* string[]

---

##### `usageTypesInput`<sup>Optional</sup> <a name="usageTypesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypesInput"></a>

```typescript
public readonly usageTypesInput: string[];
```

- *Type:* string[]

---

##### `currencies`<sup>Required</sup> <a name="currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.currencies"></a>

```typescript
public readonly currencies: string[];
```

- *Type:* string[]

---

##### `descriptions`<sup>Required</sup> <a name="descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.descriptions"></a>

```typescript
public readonly descriptions: string[];
```

- *Type:* string[]

---

##### `durations`<sup>Required</sup> <a name="durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.durations"></a>

```typescript
public readonly durations: number[];
```

- *Type:* number[]

---

##### `offeringIds`<sup>Required</sup> <a name="offeringIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.offeringIds"></a>

```typescript
public readonly offeringIds: string[];
```

- *Type:* string[]

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.operations"></a>

```typescript
public readonly operations: string[];
```

- *Type:* string[]

---

##### `paymentOptions`<sup>Required</sup> <a name="paymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.paymentOptions"></a>

```typescript
public readonly paymentOptions: string[];
```

- *Type:* string[]

---

##### `planTypes`<sup>Required</sup> <a name="planTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.planTypes"></a>

```typescript
public readonly planTypes: string[];
```

- *Type:* string[]

---

##### `productType`<sup>Required</sup> <a name="productType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

---

##### `serviceCodes`<sup>Required</sup> <a name="serviceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.serviceCodes"></a>

```typescript
public readonly serviceCodes: string[];
```

- *Type:* string[]

---

##### `usageTypes`<sup>Required</sup> <a name="usageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.usageTypes"></a>

```typescript
public readonly usageTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSavingsplansOfferingsConfig <a name="DataAwsSavingsplansOfferingsConfig" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

const dataAwsSavingsplansOfferingsConfig: dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.currencies">currencies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.descriptions">descriptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.durations">durations</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.offeringIds">offeringIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.operations">operations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.paymentOptions">paymentOptions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.planTypes">planTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.productType">productType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.serviceCodes">serviceCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.usageTypes">usageTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `currencies`<sup>Optional</sup> <a name="currencies" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.currencies"></a>

```typescript
public readonly currencies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#currencies DataAwsSavingsplansOfferings#currencies}.

---

##### `descriptions`<sup>Optional</sup> <a name="descriptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.descriptions"></a>

```typescript
public readonly descriptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#descriptions DataAwsSavingsplansOfferings#descriptions}.

---

##### `durations`<sup>Optional</sup> <a name="durations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.durations"></a>

```typescript
public readonly durations: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#durations DataAwsSavingsplansOfferings#durations}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsSavingsplansOfferingsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#filter DataAwsSavingsplansOfferings#filter}

---

##### `offeringIds`<sup>Optional</sup> <a name="offeringIds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.offeringIds"></a>

```typescript
public readonly offeringIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#offering_ids DataAwsSavingsplansOfferings#offering_ids}.

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.operations"></a>

```typescript
public readonly operations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#operations DataAwsSavingsplansOfferings#operations}.

---

##### `paymentOptions`<sup>Optional</sup> <a name="paymentOptions" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.paymentOptions"></a>

```typescript
public readonly paymentOptions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#payment_options DataAwsSavingsplansOfferings#payment_options}.

---

##### `planTypes`<sup>Optional</sup> <a name="planTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.planTypes"></a>

```typescript
public readonly planTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#plan_types DataAwsSavingsplansOfferings#plan_types}.

---

##### `productType`<sup>Optional</sup> <a name="productType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.productType"></a>

```typescript
public readonly productType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#product_type DataAwsSavingsplansOfferings#product_type}.

---

##### `serviceCodes`<sup>Optional</sup> <a name="serviceCodes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.serviceCodes"></a>

```typescript
public readonly serviceCodes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#service_codes DataAwsSavingsplansOfferings#service_codes}.

---

##### `usageTypes`<sup>Optional</sup> <a name="usageTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsConfig.property.usageTypes"></a>

```typescript
public readonly usageTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#usage_types DataAwsSavingsplansOfferings#usage_types}.

---

### DataAwsSavingsplansOfferingsFilter <a name="DataAwsSavingsplansOfferingsFilter" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

const dataAwsSavingsplansOfferingsFilter: dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#name DataAwsSavingsplansOfferings#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/data-sources/savingsplans_offerings#values DataAwsSavingsplansOfferings#values}.

---

### DataAwsSavingsplansOfferingsOfferings <a name="DataAwsSavingsplansOfferingsOfferings" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

const dataAwsSavingsplansOfferingsOfferings: dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings = { ... }
```


### DataAwsSavingsplansOfferingsOfferingsProperties <a name="DataAwsSavingsplansOfferingsOfferingsProperties" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

const dataAwsSavingsplansOfferingsOfferingsProperties: dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSavingsplansOfferingsFilterList <a name="DataAwsSavingsplansOfferingsFilterList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

new dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get"></a>

```typescript
public get(index: number): DataAwsSavingsplansOfferingsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsSavingsplansOfferingsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>[]

---


### DataAwsSavingsplansOfferingsFilterOutputReference <a name="DataAwsSavingsplansOfferingsFilterOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

new dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsSavingsplansOfferingsFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsFilter">DataAwsSavingsplansOfferingsFilter</a>

---


### DataAwsSavingsplansOfferingsOfferingsList <a name="DataAwsSavingsplansOfferingsOfferingsList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

new dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get"></a>

```typescript
public get(index: number): DataAwsSavingsplansOfferingsOfferingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSavingsplansOfferingsOfferingsOutputReference <a name="DataAwsSavingsplansOfferingsOfferingsOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

new dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.currency">currency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.offeringId">offeringId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.paymentOption">paymentOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.planType">planType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.productTypes">productTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList">DataAwsSavingsplansOfferingsOfferingsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.serviceCode">serviceCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.usageType">usageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings">DataAwsSavingsplansOfferingsOfferings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currency`<sup>Required</sup> <a name="currency" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.currency"></a>

```typescript
public readonly currency: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `paymentOption`<sup>Required</sup> <a name="paymentOption" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.paymentOption"></a>

```typescript
public readonly paymentOption: string;
```

- *Type:* string

---

##### `planType`<sup>Required</sup> <a name="planType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.planType"></a>

```typescript
public readonly planType: string;
```

- *Type:* string

---

##### `productTypes`<sup>Required</sup> <a name="productTypes" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.productTypes"></a>

```typescript
public readonly productTypes: string[];
```

- *Type:* string[]

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.properties"></a>

```typescript
public readonly properties: DataAwsSavingsplansOfferingsOfferingsPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList">DataAwsSavingsplansOfferingsOfferingsPropertiesList</a>

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.serviceCode"></a>

```typescript
public readonly serviceCode: string;
```

- *Type:* string

---

##### `usageType`<sup>Required</sup> <a name="usageType" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.usageType"></a>

```typescript
public readonly usageType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSavingsplansOfferingsOfferings;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferings">DataAwsSavingsplansOfferingsOfferings</a>

---


### DataAwsSavingsplansOfferingsOfferingsPropertiesList <a name="DataAwsSavingsplansOfferingsOfferingsPropertiesList" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

new dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference <a name="DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsSavingsplansOfferings } from '@cdktn/provider-aws'

new dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties">DataAwsSavingsplansOfferingsOfferingsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSavingsplansOfferingsOfferingsProperties;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSavingsplansOfferings.DataAwsSavingsplansOfferingsOfferingsProperties">DataAwsSavingsplansOfferingsOfferingsProperties</a>

---



