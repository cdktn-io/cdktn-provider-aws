# `dataAwsOdbDbSystemShapes` Submodule <a name="`dataAwsOdbDbSystemShapes` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbSystemShapes <a name="DataAwsOdbDbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_system_shapes aws_odb_db_system_shapes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

new dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes(scope: Construct, id: string, config?: DataAwsOdbDbSystemShapesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig">DataAwsOdbDbSystemShapesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig">DataAwsOdbDbSystemShapesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetAvailabilityZoneId"></a>

```typescript
public resetAvailabilityZoneId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbSystemShapes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsOdbDbSystemShapes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbDbSystemShapes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbDbSystemShapes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_system_shapes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbSystemShapes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dbSystemShapes">dbSystemShapes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList">DataAwsOdbDbSystemShapesDbSystemShapesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbSystemShapes`<sup>Required</sup> <a name="dbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.dbSystemShapes"></a>

```typescript
public readonly dbSystemShapes: DataAwsOdbDbSystemShapesDbSystemShapesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList">DataAwsOdbDbSystemShapesDbSystemShapesList</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneIdInput"></a>

```typescript
public readonly availabilityZoneIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbSystemShapesConfig <a name="DataAwsOdbDbSystemShapesConfig" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.Initializer"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

const dataAwsOdbDbSystemShapesConfig: dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | The physical ID of the AZ, for example, use1-az4. This ID persists across accounts. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

The physical ID of the AZ, for example, use1-az4. This ID persists across accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_system_shapes#availability_zone_id DataAwsOdbDbSystemShapes#availability_zone_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_system_shapes#region DataAwsOdbDbSystemShapes#region}

---

### DataAwsOdbDbSystemShapesDbSystemShapes <a name="DataAwsOdbDbSystemShapesDbSystemShapes" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes.Initializer"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

const dataAwsOdbDbSystemShapesDbSystemShapes: dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbSystemShapesDbSystemShapesList <a name="DataAwsOdbDbSystemShapesDbSystemShapesList" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

new dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get"></a>

```typescript
public get(index: number): DataAwsOdbDbSystemShapesDbSystemShapesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbDbSystemShapesDbSystemShapesOutputReference <a name="DataAwsOdbDbSystemShapesDbSystemShapesOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbDbSystemShapes } from '@cdktf/provider-aws'

new dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount">availableCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode">availableCoreCountPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs">availableDataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs">availableDataStoragePerServerInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs">availableDbNodePerNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs">availableDbNodeStorageInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs">availableMemoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs">availableMemoryPerNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement">coreCountIncrement</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount">maximumNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maxStorageCount">maxStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minCoreCountPerNode">minCoreCountPerNode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDataStorageInTbs">minDataStorageInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDbNodeStoragePerNodeInGbs">minDbNodeStoragePerNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount">minimumCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount">minimumNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minMemoryPerNodeInGbs">minMemoryPerNodeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minStorageCount">minStorageCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount">runtimeMinimumCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily">shapeFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeType">shapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes">DataAwsOdbDbSystemShapesDbSystemShapes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availableCoreCount`<sup>Required</sup> <a name="availableCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCount"></a>

```typescript
public readonly availableCoreCount: number;
```

- *Type:* number

---

##### `availableCoreCountPerNode`<sup>Required</sup> <a name="availableCoreCountPerNode" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableCoreCountPerNode"></a>

```typescript
public readonly availableCoreCountPerNode: number;
```

- *Type:* number

---

##### `availableDataStorageInTbs`<sup>Required</sup> <a name="availableDataStorageInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStorageInTbs"></a>

```typescript
public readonly availableDataStorageInTbs: number;
```

- *Type:* number

---

##### `availableDataStoragePerServerInTbs`<sup>Required</sup> <a name="availableDataStoragePerServerInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDataStoragePerServerInTbs"></a>

```typescript
public readonly availableDataStoragePerServerInTbs: number;
```

- *Type:* number

---

##### `availableDbNodePerNodeInGbs`<sup>Required</sup> <a name="availableDbNodePerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodePerNodeInGbs"></a>

```typescript
public readonly availableDbNodePerNodeInGbs: number;
```

- *Type:* number

---

##### `availableDbNodeStorageInGbs`<sup>Required</sup> <a name="availableDbNodeStorageInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableDbNodeStorageInGbs"></a>

```typescript
public readonly availableDbNodeStorageInGbs: number;
```

- *Type:* number

---

##### `availableMemoryInGbs`<sup>Required</sup> <a name="availableMemoryInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryInGbs"></a>

```typescript
public readonly availableMemoryInGbs: number;
```

- *Type:* number

---

##### `availableMemoryPerNodeInGbs`<sup>Required</sup> <a name="availableMemoryPerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.availableMemoryPerNodeInGbs"></a>

```typescript
public readonly availableMemoryPerNodeInGbs: number;
```

- *Type:* number

---

##### `coreCountIncrement`<sup>Required</sup> <a name="coreCountIncrement" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.coreCountIncrement"></a>

```typescript
public readonly coreCountIncrement: number;
```

- *Type:* number

---

##### `maximumNodeCount`<sup>Required</sup> <a name="maximumNodeCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maximumNodeCount"></a>

```typescript
public readonly maximumNodeCount: number;
```

- *Type:* number

---

##### `maxStorageCount`<sup>Required</sup> <a name="maxStorageCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.maxStorageCount"></a>

```typescript
public readonly maxStorageCount: number;
```

- *Type:* number

---

##### `minCoreCountPerNode`<sup>Required</sup> <a name="minCoreCountPerNode" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minCoreCountPerNode"></a>

```typescript
public readonly minCoreCountPerNode: number;
```

- *Type:* number

---

##### `minDataStorageInTbs`<sup>Required</sup> <a name="minDataStorageInTbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDataStorageInTbs"></a>

```typescript
public readonly minDataStorageInTbs: number;
```

- *Type:* number

---

##### `minDbNodeStoragePerNodeInGbs`<sup>Required</sup> <a name="minDbNodeStoragePerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minDbNodeStoragePerNodeInGbs"></a>

```typescript
public readonly minDbNodeStoragePerNodeInGbs: number;
```

- *Type:* number

---

##### `minimumCoreCount`<sup>Required</sup> <a name="minimumCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumCoreCount"></a>

```typescript
public readonly minimumCoreCount: number;
```

- *Type:* number

---

##### `minimumNodeCount`<sup>Required</sup> <a name="minimumNodeCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minimumNodeCount"></a>

```typescript
public readonly minimumNodeCount: number;
```

- *Type:* number

---

##### `minMemoryPerNodeInGbs`<sup>Required</sup> <a name="minMemoryPerNodeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minMemoryPerNodeInGbs"></a>

```typescript
public readonly minMemoryPerNodeInGbs: number;
```

- *Type:* number

---

##### `minStorageCount`<sup>Required</sup> <a name="minStorageCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.minStorageCount"></a>

```typescript
public readonly minStorageCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeMinimumCoreCount`<sup>Required</sup> <a name="runtimeMinimumCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.runtimeMinimumCoreCount"></a>

```typescript
public readonly runtimeMinimumCoreCount: number;
```

- *Type:* number

---

##### `shapeFamily`<sup>Required</sup> <a name="shapeFamily" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeFamily"></a>

```typescript
public readonly shapeFamily: string;
```

- *Type:* string

---

##### `shapeType`<sup>Required</sup> <a name="shapeType" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.shapeType"></a>

```typescript
public readonly shapeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbDbSystemShapesDbSystemShapes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbSystemShapes.DataAwsOdbDbSystemShapesDbSystemShapes">DataAwsOdbDbSystemShapesDbSystemShapes</a>

---



