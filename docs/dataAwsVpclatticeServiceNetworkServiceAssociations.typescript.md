# `dataAwsVpclatticeServiceNetworkServiceAssociations` Submodule <a name="`dataAwsVpclatticeServiceNetworkServiceAssociations` Submodule" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpclatticeServiceNetworkServiceAssociations <a name="DataAwsVpclatticeServiceNetworkServiceAssociations" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpclattice_service_network_service_associations aws_vpclattice_service_network_service_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

new dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations(scope: Construct, id: string, config?: DataAwsVpclatticeServiceNetworkServiceAssociationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig">DataAwsVpclatticeServiceNetworkServiceAssociationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig">DataAwsVpclatticeServiceNetworkServiceAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetServiceIdentifier">resetServiceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetServiceNetworkIdentifier">resetServiceNetworkIdentifier</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetServiceIdentifier` <a name="resetServiceIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetServiceIdentifier"></a>

```typescript
public resetServiceIdentifier(): void
```

##### `resetServiceNetworkIdentifier` <a name="resetServiceNetworkIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.resetServiceNetworkIdentifier"></a>

```typescript
public resetServiceNetworkIdentifier(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsVpclatticeServiceNetworkServiceAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isConstruct"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformElement"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformDataSource"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsVpclatticeServiceNetworkServiceAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpclatticeServiceNetworkServiceAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpclatticeServiceNetworkServiceAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpclattice_service_network_service_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsVpclatticeServiceNetworkServiceAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.items">items</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceIdentifierInput">serviceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceNetworkIdentifierInput">serviceNetworkIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.items"></a>

```typescript
public readonly items: DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serviceIdentifierInput`<sup>Optional</sup> <a name="serviceIdentifierInput" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceIdentifierInput"></a>

```typescript
public readonly serviceIdentifierInput: string;
```

- *Type:* string

---

##### `serviceNetworkIdentifierInput`<sup>Optional</sup> <a name="serviceNetworkIdentifierInput" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceNetworkIdentifierInput"></a>

```typescript
public readonly serviceNetworkIdentifierInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serviceIdentifier`<sup>Required</sup> <a name="serviceIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

---

##### `serviceNetworkIdentifier`<sup>Required</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpclatticeServiceNetworkServiceAssociationsConfig <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsConfig" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.Initializer"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

const dataAwsVpclatticeServiceNetworkServiceAssociationsConfig: dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.serviceIdentifier">serviceIdentifier</a></code> | <code>string</code> | ID or ARN of the Service. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.serviceNetworkIdentifier">serviceNetworkIdentifier</a></code> | <code>string</code> | ID or ARN of the Service Network. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpclattice_service_network_service_associations#region DataAwsVpclatticeServiceNetworkServiceAssociations#region}

---

##### `serviceIdentifier`<sup>Optional</sup> <a name="serviceIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.serviceIdentifier"></a>

```typescript
public readonly serviceIdentifier: string;
```

- *Type:* string

ID or ARN of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpclattice_service_network_service_associations#service_identifier DataAwsVpclatticeServiceNetworkServiceAssociations#service_identifier}

---

##### `serviceNetworkIdentifier`<sup>Optional</sup> <a name="serviceNetworkIdentifier" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsConfig.property.serviceNetworkIdentifier"></a>

```typescript
public readonly serviceNetworkIdentifier: string;
```

- *Type:* string

ID or ARN of the Service Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/vpclattice_service_network_service_associations#service_network_identifier DataAwsVpclatticeServiceNetworkServiceAssociations#service_network_identifier}

---

### DataAwsVpclatticeServiceNetworkServiceAssociationsItems <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItems" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems.Initializer"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

const dataAwsVpclatticeServiceNetworkServiceAssociationsItems: dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems = { ... }
```


### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry.Initializer"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

const dataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry: dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

new dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.get"></a>

```typescript
public get(index: number): DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

new dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntry</a>

---


### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

new dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.get"></a>

```typescript
public get(index: number): DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference <a name="DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer"></a>

```typescript
import { dataAwsVpclatticeServiceNetworkServiceAssociations } from '@cdktn/provider-aws'

new dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.customDomainName">customDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.dnsEntry">dnsEntry</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceArn">serviceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkName">serviceNetworkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems">DataAwsVpclatticeServiceNetworkServiceAssociationsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `customDomainName`<sup>Required</sup> <a name="customDomainName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.customDomainName"></a>

```typescript
public readonly customDomainName: string;
```

- *Type:* string

---

##### `dnsEntry`<sup>Required</sup> <a name="dnsEntry" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.dnsEntry"></a>

```typescript
public readonly dnsEntry: DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList">DataAwsVpclatticeServiceNetworkServiceAssociationsItemsDnsEntryList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serviceArn`<sup>Required</sup> <a name="serviceArn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceArn"></a>

```typescript
public readonly serviceArn: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

---

##### `serviceNetworkName`<sup>Required</sup> <a name="serviceNetworkName" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.serviceNetworkName"></a>

```typescript
public readonly serviceNetworkName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpclatticeServiceNetworkServiceAssociationsItems;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsVpclatticeServiceNetworkServiceAssociations.DataAwsVpclatticeServiceNetworkServiceAssociationsItems">DataAwsVpclatticeServiceNetworkServiceAssociationsItems</a>

---



