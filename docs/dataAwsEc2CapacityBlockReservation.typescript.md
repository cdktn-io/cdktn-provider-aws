# `dataAwsEc2CapacityBlockReservation` Submodule <a name="`dataAwsEc2CapacityBlockReservation` Submodule" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2CapacityBlockReservation <a name="DataAwsEc2CapacityBlockReservation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

new dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation(scope: Construct, id: string, config?: DataAwsEc2CapacityBlockReservationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig">DataAwsEc2CapacityBlockReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig">DataAwsEc2CapacityBlockReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2CapacityBlockReservationFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2CapacityBlockReservation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsEc2CapacityBlockReservation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2CapacityBlockReservation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2CapacityBlockReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2CapacityBlockReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availableInstanceCount">availableInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.capacityBlockId">capacityBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.commitmentInfo">commitmentInfo</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference">DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.deliveryPreference">deliveryPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ebsOptimized">ebsOptimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDateType">endDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList">DataAwsEc2CapacityBlockReservationFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceMatchCriteria">instanceMatchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instancePlatform">instancePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptibleCapacityAllocation">interruptibleCapacityAllocation</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptionInfo">interruptionInfo</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference">DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.placementGroupArn">placementGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.reservationType">reservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.startDate">startDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `availableInstanceCount`<sup>Required</sup> <a name="availableInstanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.availableInstanceCount"></a>

```typescript
public readonly availableInstanceCount: number;
```

- *Type:* number

---

##### `capacityBlockId`<sup>Required</sup> <a name="capacityBlockId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.capacityBlockId"></a>

```typescript
public readonly capacityBlockId: string;
```

- *Type:* string

---

##### `commitmentInfo`<sup>Required</sup> <a name="commitmentInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.commitmentInfo"></a>

```typescript
public readonly commitmentInfo: DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference">DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `deliveryPreference`<sup>Required</sup> <a name="deliveryPreference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.deliveryPreference"></a>

```typescript
public readonly deliveryPreference: string;
```

- *Type:* string

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `endDateType`<sup>Required</sup> <a name="endDateType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.endDateType"></a>

```typescript
public readonly endDateType: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2CapacityBlockReservationFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList">DataAwsEc2CapacityBlockReservationFilterList</a>

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceMatchCriteria`<sup>Required</sup> <a name="instanceMatchCriteria" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceMatchCriteria"></a>

```typescript
public readonly instanceMatchCriteria: string;
```

- *Type:* string

---

##### `instancePlatform`<sup>Required</sup> <a name="instancePlatform" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instancePlatform"></a>

```typescript
public readonly instancePlatform: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `interruptibleCapacityAllocation`<sup>Required</sup> <a name="interruptibleCapacityAllocation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptibleCapacityAllocation"></a>

```typescript
public readonly interruptibleCapacityAllocation: DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference</a>

---

##### `interruptionInfo`<sup>Required</sup> <a name="interruptionInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.interruptionInfo"></a>

```typescript
public readonly interruptionInfo: DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference">DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference</a>

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `placementGroupArn`<sup>Required</sup> <a name="placementGroupArn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.placementGroupArn"></a>

```typescript
public readonly placementGroupArn: string;
```

- *Type:* string

---

##### `reservationType`<sup>Required</sup> <a name="reservationType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.reservationType"></a>

```typescript
public readonly reservationType: string;
```

- *Type:* string

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.startDate"></a>

```typescript
public readonly startDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2CapacityBlockReservationFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2CapacityBlockReservationCommitmentInfo <a name="DataAwsEc2CapacityBlockReservationCommitmentInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

const dataAwsEc2CapacityBlockReservationCommitmentInfo: dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo = { ... }
```


### DataAwsEc2CapacityBlockReservationConfig <a name="DataAwsEc2CapacityBlockReservationConfig" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

const dataAwsEc2CapacityBlockReservationConfig: dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2CapacityBlockReservationFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#filter DataAwsEc2CapacityBlockReservation#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#id DataAwsEc2CapacityBlockReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#region DataAwsEc2CapacityBlockReservation#region}

---

### DataAwsEc2CapacityBlockReservationFilter <a name="DataAwsEc2CapacityBlockReservationFilter" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

const dataAwsEc2CapacityBlockReservationFilter: dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#name DataAwsEc2CapacityBlockReservation#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#values DataAwsEc2CapacityBlockReservation#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#name DataAwsEc2CapacityBlockReservation#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.55.0/docs/data-sources/ec2_capacity_block_reservation#values DataAwsEc2CapacityBlockReservation#values}.

---

### DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation <a name="DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

const dataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation: dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation = { ... }
```


### DataAwsEc2CapacityBlockReservationInterruptionInfo <a name="DataAwsEc2CapacityBlockReservationInterruptionInfo" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

const dataAwsEc2CapacityBlockReservationInterruptionInfo: dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference <a name="DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

new dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.commitmentEndDate">commitmentEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.committedInstanceCount">committedInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo">DataAwsEc2CapacityBlockReservationCommitmentInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitmentEndDate`<sup>Required</sup> <a name="commitmentEndDate" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.commitmentEndDate"></a>

```typescript
public readonly commitmentEndDate: string;
```

- *Type:* string

---

##### `committedInstanceCount`<sup>Required</sup> <a name="committedInstanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.committedInstanceCount"></a>

```typescript
public readonly committedInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2CapacityBlockReservationCommitmentInfo;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationCommitmentInfo">DataAwsEc2CapacityBlockReservationCommitmentInfo</a>

---


### DataAwsEc2CapacityBlockReservationFilterList <a name="DataAwsEc2CapacityBlockReservationFilterList" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

new dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2CapacityBlockReservationFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2CapacityBlockReservationFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>[]

---


### DataAwsEc2CapacityBlockReservationFilterOutputReference <a name="DataAwsEc2CapacityBlockReservationFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

new dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2CapacityBlockReservationFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationFilter">DataAwsEc2CapacityBlockReservationFilter</a>

---


### DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference <a name="DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

new dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptibleCapacityReservationId">interruptibleCapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptionType">interruptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.targetInstanceCount">targetInstanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `interruptibleCapacityReservationId`<sup>Required</sup> <a name="interruptibleCapacityReservationId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptibleCapacityReservationId"></a>

```typescript
public readonly interruptibleCapacityReservationId: string;
```

- *Type:* string

---

##### `interruptionType`<sup>Required</sup> <a name="interruptionType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.interruptionType"></a>

```typescript
public readonly interruptionType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `targetInstanceCount`<sup>Required</sup> <a name="targetInstanceCount" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.targetInstanceCount"></a>

```typescript
public readonly targetInstanceCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation">DataAwsEc2CapacityBlockReservationInterruptibleCapacityAllocation</a>

---


### DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference <a name="DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2CapacityBlockReservation } from '@cdktn/provider-aws'

new dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.interruptionType">interruptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.sourceCapacityReservationId">sourceCapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo">DataAwsEc2CapacityBlockReservationInterruptionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interruptionType`<sup>Required</sup> <a name="interruptionType" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.interruptionType"></a>

```typescript
public readonly interruptionType: string;
```

- *Type:* string

---

##### `sourceCapacityReservationId`<sup>Required</sup> <a name="sourceCapacityReservationId" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.sourceCapacityReservationId"></a>

```typescript
public readonly sourceCapacityReservationId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsEc2CapacityBlockReservationInterruptionInfo;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2CapacityBlockReservation.DataAwsEc2CapacityBlockReservationInterruptionInfo">DataAwsEc2CapacityBlockReservationInterruptionInfo</a>

---



