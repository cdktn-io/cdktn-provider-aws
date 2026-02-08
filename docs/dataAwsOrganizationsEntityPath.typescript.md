# `dataAwsOrganizationsEntityPath` Submodule <a name="`dataAwsOrganizationsEntityPath` Submodule" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOrganizationsEntityPath <a name="DataAwsOrganizationsEntityPath" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/organizations_entity_path aws_organizations_entity_path}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.Initializer"></a>

```typescript
import { dataAwsOrganizationsEntityPath } from '@cdktn/provider-aws'

new dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath(scope: Construct, id: string, config: DataAwsOrganizationsEntityPathConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig">DataAwsOrganizationsEntityPathConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig">DataAwsOrganizationsEntityPathConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOrganizationsEntityPath resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isConstruct"></a>

```typescript
import { dataAwsOrganizationsEntityPath } from '@cdktn/provider-aws'

dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isTerraformElement"></a>

```typescript
import { dataAwsOrganizationsEntityPath } from '@cdktn/provider-aws'

dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isTerraformDataSource"></a>

```typescript
import { dataAwsOrganizationsEntityPath } from '@cdktn/provider-aws'

dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.generateConfigForImport"></a>

```typescript
import { dataAwsOrganizationsEntityPath } from '@cdktn/provider-aws'

dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsOrganizationsEntityPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOrganizationsEntityPath to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOrganizationsEntityPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/organizations_entity_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOrganizationsEntityPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.entityPath">entityPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.entityIdInput">entityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.entityId">entityId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `entityPath`<sup>Required</sup> <a name="entityPath" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.entityPath"></a>

```typescript
public readonly entityPath: string;
```

- *Type:* string

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.entityIdInput"></a>

```typescript
public readonly entityIdInput: string;
```

- *Type:* string

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPath.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOrganizationsEntityPathConfig <a name="DataAwsOrganizationsEntityPathConfig" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.Initializer"></a>

```typescript
import { dataAwsOrganizationsEntityPath } from '@cdktn/provider-aws'

const dataAwsOrganizationsEntityPathConfig: dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.entityId">entityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/organizations_entity_path#entity_id DataAwsOrganizationsEntityPath#entity_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-aws.dataAwsOrganizationsEntityPath.DataAwsOrganizationsEntityPathConfig.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/organizations_entity_path#entity_id DataAwsOrganizationsEntityPath#entity_id}.

---



