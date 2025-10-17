# `dataAwsRdsGlobalCluster` Submodule <a name="`dataAwsRdsGlobalCluster` Submodule" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRdsGlobalCluster <a name="DataAwsRdsGlobalCluster" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/rds_global_cluster aws_rds_global_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

new dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster(scope: Construct, id: string, config: DataAwsRdsGlobalClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig">DataAwsRdsGlobalClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig">DataAwsRdsGlobalClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRdsGlobalCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isConstruct"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformElement"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformDataSource"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsRdsGlobalCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRdsGlobalCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRdsGlobalCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/rds_global_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRdsGlobalCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.deletionProtection">deletionProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engineLifecycleSupport">engineLifecycleSupport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.members">members</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList">DataAwsRdsGlobalClusterMembersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.storageEncrypted">storageEncrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineLifecycleSupport`<sup>Required</sup> <a name="engineLifecycleSupport" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engineLifecycleSupport"></a>

```typescript
public readonly engineLifecycleSupport: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.members"></a>

```typescript
public readonly members: DataAwsRdsGlobalClusterMembersList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList">DataAwsRdsGlobalClusterMembersList</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRdsGlobalClusterConfig <a name="DataAwsRdsGlobalClusterConfig" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.Initializer"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

const dataAwsRdsGlobalClusterConfig: dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/rds_global_cluster#identifier DataAwsRdsGlobalCluster#identifier}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/rds_global_cluster#identifier DataAwsRdsGlobalCluster#identifier}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.17.0/docs/data-sources/rds_global_cluster#region DataAwsRdsGlobalCluster#region}

---

### DataAwsRdsGlobalClusterMembers <a name="DataAwsRdsGlobalClusterMembers" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers.Initializer"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

const dataAwsRdsGlobalClusterMembers: dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsRdsGlobalClusterMembersList <a name="DataAwsRdsGlobalClusterMembersList" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

new dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.get"></a>

```typescript
public get(index: number): DataAwsRdsGlobalClusterMembersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsRdsGlobalClusterMembersOutputReference <a name="DataAwsRdsGlobalClusterMembersOutputReference" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer"></a>

```typescript
import { dataAwsRdsGlobalCluster } from '@cdktf/provider-aws'

new dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.dbClusterArn">dbClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.isWriter">isWriter</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers">DataAwsRdsGlobalClusterMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dbClusterArn`<sup>Required</sup> <a name="dbClusterArn" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.dbClusterArn"></a>

```typescript
public readonly dbClusterArn: string;
```

- *Type:* string

---

##### `isWriter`<sup>Required</sup> <a name="isWriter" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.isWriter"></a>

```typescript
public readonly isWriter: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsRdsGlobalClusterMembers;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRdsGlobalCluster.DataAwsRdsGlobalClusterMembers">DataAwsRdsGlobalClusterMembers</a>

---



