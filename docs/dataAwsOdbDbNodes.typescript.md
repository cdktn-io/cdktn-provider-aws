# `dataAwsOdbDbNodes` Submodule <a name="`dataAwsOdbDbNodes` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbNodes <a name="DataAwsOdbDbNodes" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_nodes aws_odb_db_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

new dataAwsOdbDbNodes.DataAwsOdbDbNodes(scope: Construct, id: string, config: DataAwsOdbDbNodesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig">DataAwsOdbDbNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig">DataAwsOdbDbNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbNodes resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isConstruct"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

dataAwsOdbDbNodes.DataAwsOdbDbNodes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformElement"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformDataSource"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsOdbDbNodes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbDbNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbDbNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.dbNodes">dbNodes</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList">DataAwsOdbDbNodesDbNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cloudVmClusterIdInput">cloudVmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbNodes`<sup>Required</sup> <a name="dbNodes" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.dbNodes"></a>

```typescript
public readonly dbNodes: DataAwsOdbDbNodesDbNodesList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList">DataAwsOdbDbNodesDbNodesList</a>

---

##### `cloudVmClusterIdInput`<sup>Optional</sup> <a name="cloudVmClusterIdInput" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cloudVmClusterIdInput"></a>

```typescript
public readonly cloudVmClusterIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbNodesConfig <a name="DataAwsOdbDbNodesConfig" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.Initializer"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

const dataAwsOdbDbNodesConfig: dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.cloudVmClusterId">cloudVmClusterId</a></code> | <code>string</code> | Id of the cloud VM cluster. The unique identifier of the VM cluster. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudVmClusterId`<sup>Required</sup> <a name="cloudVmClusterId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.cloudVmClusterId"></a>

```typescript
public readonly cloudVmClusterId: string;
```

- *Type:* string

Id of the cloud VM cluster. The unique identifier of the VM cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_nodes#cloud_vm_cluster_id DataAwsOdbDbNodes#cloud_vm_cluster_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/data-sources/odb_db_nodes#region DataAwsOdbDbNodes#region}

---

### DataAwsOdbDbNodesDbNodes <a name="DataAwsOdbDbNodesDbNodes" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes.Initializer"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

const dataAwsOdbDbNodesDbNodes: dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbNodesDbNodesList <a name="DataAwsOdbDbNodesDbNodesList" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

new dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.get"></a>

```typescript
public get(index: number): DataAwsOdbDbNodesDbNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbDbNodesDbNodesOutputReference <a name="DataAwsOdbDbNodesDbNodesOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbDbNodes } from '@cdktf/provider-aws'

new dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupIpId">backupIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupVnic2Id">backupVnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupVnicId">backupVnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbNodeStorageSize">dbNodeStorageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbServerId">dbServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.faultDomain">faultDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.hostIpId">hostIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.maintenanceType">maintenanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.memorySize">memorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.softwareStorageSize">softwareStorageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.totalCpuCoreCount">totalCpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.vnic2Id">vnic2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.vnicId">vnicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes">DataAwsOdbDbNodesDbNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.additionalDetails"></a>

```typescript
public readonly additionalDetails: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `backupIpId`<sup>Required</sup> <a name="backupIpId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupIpId"></a>

```typescript
public readonly backupIpId: string;
```

- *Type:* string

---

##### `backupVnic2Id`<sup>Required</sup> <a name="backupVnic2Id" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupVnic2Id"></a>

```typescript
public readonly backupVnic2Id: string;
```

- *Type:* string

---

##### `backupVnicId`<sup>Required</sup> <a name="backupVnicId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.backupVnicId"></a>

```typescript
public readonly backupVnicId: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dbNodeStorageSize`<sup>Required</sup> <a name="dbNodeStorageSize" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbNodeStorageSize"></a>

```typescript
public readonly dbNodeStorageSize: number;
```

- *Type:* number

---

##### `dbServerId`<sup>Required</sup> <a name="dbServerId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbServerId"></a>

```typescript
public readonly dbServerId: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.faultDomain"></a>

```typescript
public readonly faultDomain: string;
```

- *Type:* string

---

##### `hostIpId`<sup>Required</sup> <a name="hostIpId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.hostIpId"></a>

```typescript
public readonly hostIpId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.maintenanceType"></a>

```typescript
public readonly maintenanceType: string;
```

- *Type:* string

---

##### `memorySize`<sup>Required</sup> <a name="memorySize" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `softwareStorageSize`<sup>Required</sup> <a name="softwareStorageSize" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.softwareStorageSize"></a>

```typescript
public readonly softwareStorageSize: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `timeMaintenanceWindowEnd`<sup>Required</sup> <a name="timeMaintenanceWindowEnd" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.timeMaintenanceWindowEnd"></a>

```typescript
public readonly timeMaintenanceWindowEnd: string;
```

- *Type:* string

---

##### `timeMaintenanceWindowStart`<sup>Required</sup> <a name="timeMaintenanceWindowStart" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.timeMaintenanceWindowStart"></a>

```typescript
public readonly timeMaintenanceWindowStart: string;
```

- *Type:* string

---

##### `totalCpuCoreCount`<sup>Required</sup> <a name="totalCpuCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.totalCpuCoreCount"></a>

```typescript
public readonly totalCpuCoreCount: number;
```

- *Type:* number

---

##### `vnic2Id`<sup>Required</sup> <a name="vnic2Id" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.vnic2Id"></a>

```typescript
public readonly vnic2Id: string;
```

- *Type:* string

---

##### `vnicId`<sup>Required</sup> <a name="vnicId" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.vnicId"></a>

```typescript
public readonly vnicId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbDbNodesDbNodes;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbNodes.DataAwsOdbDbNodesDbNodes">DataAwsOdbDbNodesDbNodes</a>

---



