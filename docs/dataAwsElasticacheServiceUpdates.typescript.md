# `dataAwsElasticacheServiceUpdates` Submodule <a name="`dataAwsElasticacheServiceUpdates` Submodule" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheServiceUpdates <a name="DataAwsElasticacheServiceUpdates" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates aws_elasticache_service_updates}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

new dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates(scope: Construct, id: string, config?: DataAwsElasticacheServiceUpdatesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig">DataAwsElasticacheServiceUpdatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig">DataAwsElasticacheServiceUpdatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsElasticacheServiceUpdates resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isConstruct"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformElement"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformDataSource"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsElasticacheServiceUpdates resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsElasticacheServiceUpdates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsElasticacheServiceUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheServiceUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.serviceUpdates">serviceUpdates</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList">DataAwsElasticacheServiceUpdatesServiceUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.statusInput">statusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.status">status</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `serviceUpdates`<sup>Required</sup> <a name="serviceUpdates" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.serviceUpdates"></a>

```typescript
public readonly serviceUpdates: DataAwsElasticacheServiceUpdatesServiceUpdatesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList">DataAwsElasticacheServiceUpdatesServiceUpdatesList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.statusInput"></a>

```typescript
public readonly statusInput: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdates.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheServiceUpdatesConfig <a name="DataAwsElasticacheServiceUpdatesConfig" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

const dataAwsElasticacheServiceUpdatesConfig: dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.status">status</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#status DataAwsElasticacheServiceUpdates#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#region DataAwsElasticacheServiceUpdates#region}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesConfig.property.status"></a>

```typescript
public readonly status: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/data-sources/elasticache_service_updates#status DataAwsElasticacheServiceUpdates#status}.

---

### DataAwsElasticacheServiceUpdatesServiceUpdates <a name="DataAwsElasticacheServiceUpdatesServiceUpdates" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

const dataAwsElasticacheServiceUpdatesServiceUpdates: dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheServiceUpdatesServiceUpdatesList <a name="DataAwsElasticacheServiceUpdatesServiceUpdatesList" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

new dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.get"></a>

```typescript
public get(index: number): DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference <a name="DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdates } from '@cdktn/provider-aws'

new dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.autoUpdateAfterRecommendedApplyByDate">autoUpdateAfterRecommendedApplyByDate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.endDate">endDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.estimatedUpdateTime">estimatedUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.recommendedApplyByDate">recommendedApplyByDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.severity">severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates">DataAwsElasticacheServiceUpdatesServiceUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoUpdateAfterRecommendedApplyByDate`<sup>Required</sup> <a name="autoUpdateAfterRecommendedApplyByDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.autoUpdateAfterRecommendedApplyByDate"></a>

```typescript
public readonly autoUpdateAfterRecommendedApplyByDate: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.endDate"></a>

```typescript
public readonly endDate: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `estimatedUpdateTime`<sup>Required</sup> <a name="estimatedUpdateTime" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.estimatedUpdateTime"></a>

```typescript
public readonly estimatedUpdateTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `recommendedApplyByDate`<sup>Required</sup> <a name="recommendedApplyByDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.recommendedApplyByDate"></a>

```typescript
public readonly recommendedApplyByDate: string;
```

- *Type:* string

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.severity"></a>

```typescript
public readonly severity: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticacheServiceUpdatesServiceUpdates;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdates.DataAwsElasticacheServiceUpdatesServiceUpdates">DataAwsElasticacheServiceUpdatesServiceUpdates</a>

---



