# `dataAwsArcregionswitchPlan` Submodule <a name="`dataAwsArcregionswitchPlan` Submodule" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsArcregionswitchPlan <a name="DataAwsArcregionswitchPlan" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan aws_arcregionswitch_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer"></a>

```typescript
import { dataAwsArcregionswitchPlan } from '@cdktn/provider-aws'

new dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan(scope: Construct, id: string, config: DataAwsArcregionswitchPlanConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig">DataAwsArcregionswitchPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig">DataAwsArcregionswitchPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsArcregionswitchPlan resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct"></a>

```typescript
import { dataAwsArcregionswitchPlan } from '@cdktn/provider-aws'

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement"></a>

```typescript
import { dataAwsArcregionswitchPlan } from '@cdktn/provider-aws'

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource"></a>

```typescript
import { dataAwsArcregionswitchPlan } from '@cdktn/provider-aws'

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport"></a>

```typescript
import { dataAwsArcregionswitchPlan } from '@cdktn/provider-aws'

dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsArcregionswitchPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsArcregionswitchPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsArcregionswitchPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsArcregionswitchPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.executionRole">executionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.primaryRegion">primaryRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryApproach">recoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryTimeObjectiveMinutes">recoveryTimeObjectiveMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.executionRole"></a>

```typescript
public readonly executionRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `primaryRegion`<sup>Required</sup> <a name="primaryRegion" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.primaryRegion"></a>

```typescript
public readonly primaryRegion: string;
```

- *Type:* string

---

##### `recoveryApproach`<sup>Required</sup> <a name="recoveryApproach" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryApproach"></a>

```typescript
public readonly recoveryApproach: string;
```

- *Type:* string

---

##### `recoveryTimeObjectiveMinutes`<sup>Required</sup> <a name="recoveryTimeObjectiveMinutes" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.recoveryTimeObjectiveMinutes"></a>

```typescript
public readonly recoveryTimeObjectiveMinutes: number;
```

- *Type:* number

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlan.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsArcregionswitchPlanConfig <a name="DataAwsArcregionswitchPlanConfig" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.Initializer"></a>

```typescript
import { dataAwsArcregionswitchPlan } from '@cdktn/provider-aws'

const dataAwsArcregionswitchPlanConfig: dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#arn DataAwsArcregionswitchPlan#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#arn DataAwsArcregionswitchPlan#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsArcregionswitchPlan.DataAwsArcregionswitchPlanConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/arcregionswitch_plan#region DataAwsArcregionswitchPlan#region}

---



