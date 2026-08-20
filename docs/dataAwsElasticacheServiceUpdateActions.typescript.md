# `dataAwsElasticacheServiceUpdateActions` Submodule <a name="`dataAwsElasticacheServiceUpdateActions` Submodule" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticacheServiceUpdateActions <a name="DataAwsElasticacheServiceUpdateActions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions aws_elasticache_service_update_actions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

new dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions(scope: Construct, id: string, config?: DataAwsElasticacheServiceUpdateActionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig">DataAwsElasticacheServiceUpdateActionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig">DataAwsElasticacheServiceUpdateActionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetCacheClusterId">resetCacheClusterId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetReplicationGroupId">resetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetServiceUpdateStatus">resetServiceUpdateStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCacheClusterId` <a name="resetCacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetCacheClusterId"></a>

```typescript
public resetCacheClusterId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReplicationGroupId` <a name="resetReplicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetReplicationGroupId"></a>

```typescript
public resetReplicationGroupId(): void
```

##### `resetServiceUpdateStatus` <a name="resetServiceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.resetServiceUpdateStatus"></a>

```typescript
public resetServiceUpdateStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsElasticacheServiceUpdateActions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsElasticacheServiceUpdateActions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsElasticacheServiceUpdateActions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsElasticacheServiceUpdateActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsElasticacheServiceUpdateActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.updateActions">updateActions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList">DataAwsElasticacheServiceUpdateActionsUpdateActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterIdInput">cacheClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupIdInput">replicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatusInput">serviceUpdateStatusInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterId">cacheClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatus">serviceUpdateStatus</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `updateActions`<sup>Required</sup> <a name="updateActions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.updateActions"></a>

```typescript
public readonly updateActions: DataAwsElasticacheServiceUpdateActionsUpdateActionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList">DataAwsElasticacheServiceUpdateActionsUpdateActionsList</a>

---

##### `cacheClusterIdInput`<sup>Optional</sup> <a name="cacheClusterIdInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterIdInput"></a>

```typescript
public readonly cacheClusterIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicationGroupIdInput`<sup>Optional</sup> <a name="replicationGroupIdInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupIdInput"></a>

```typescript
public readonly replicationGroupIdInput: string;
```

- *Type:* string

---

##### `serviceUpdateStatusInput`<sup>Optional</sup> <a name="serviceUpdateStatusInput" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatusInput"></a>

```typescript
public readonly serviceUpdateStatusInput: string[];
```

- *Type:* string[]

---

##### `cacheClusterId`<sup>Required</sup> <a name="cacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.cacheClusterId"></a>

```typescript
public readonly cacheClusterId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

---

##### `serviceUpdateStatus`<sup>Required</sup> <a name="serviceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.serviceUpdateStatus"></a>

```typescript
public readonly serviceUpdateStatus: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActions.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticacheServiceUpdateActionsConfig <a name="DataAwsElasticacheServiceUpdateActionsConfig" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

const dataAwsElasticacheServiceUpdateActionsConfig: dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.cacheClusterId">cacheClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.serviceUpdateStatus">serviceUpdateStatus</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cacheClusterId`<sup>Optional</sup> <a name="cacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.cacheClusterId"></a>

```typescript
public readonly cacheClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#cache_cluster_id DataAwsElasticacheServiceUpdateActions#cache_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#region DataAwsElasticacheServiceUpdateActions#region}

---

##### `replicationGroupId`<sup>Optional</sup> <a name="replicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#replication_group_id DataAwsElasticacheServiceUpdateActions#replication_group_id}.

---

##### `serviceUpdateStatus`<sup>Optional</sup> <a name="serviceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsConfig.property.serviceUpdateStatus"></a>

```typescript
public readonly serviceUpdateStatus: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/elasticache_service_update_actions#service_update_status DataAwsElasticacheServiceUpdateActions#service_update_status}.

---

### DataAwsElasticacheServiceUpdateActionsUpdateActions <a name="DataAwsElasticacheServiceUpdateActionsUpdateActions" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

const dataAwsElasticacheServiceUpdateActionsUpdateActions: dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticacheServiceUpdateActionsUpdateActionsList <a name="DataAwsElasticacheServiceUpdateActionsUpdateActionsList" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

new dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference <a name="DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticacheServiceUpdateActions } from '@cdktn/provider-aws'

new dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.cacheClusterId">cacheClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.estimatedUpdateTime">estimatedUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.recommendedApplyByDate">recommendedApplyByDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.releaseDate">releaseDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.replicationGroupId">replicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateName">serviceUpdateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateSeverity">serviceUpdateSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateStatus">serviceUpdateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateType">serviceUpdateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.updateActionStatus">updateActionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions">DataAwsElasticacheServiceUpdateActionsUpdateActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cacheClusterId`<sup>Required</sup> <a name="cacheClusterId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.cacheClusterId"></a>

```typescript
public readonly cacheClusterId: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `estimatedUpdateTime`<sup>Required</sup> <a name="estimatedUpdateTime" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.estimatedUpdateTime"></a>

```typescript
public readonly estimatedUpdateTime: string;
```

- *Type:* string

---

##### `recommendedApplyByDate`<sup>Required</sup> <a name="recommendedApplyByDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.recommendedApplyByDate"></a>

```typescript
public readonly recommendedApplyByDate: string;
```

- *Type:* string

---

##### `releaseDate`<sup>Required</sup> <a name="releaseDate" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.releaseDate"></a>

```typescript
public readonly releaseDate: string;
```

- *Type:* string

---

##### `replicationGroupId`<sup>Required</sup> <a name="replicationGroupId" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.replicationGroupId"></a>

```typescript
public readonly replicationGroupId: string;
```

- *Type:* string

---

##### `serviceUpdateName`<sup>Required</sup> <a name="serviceUpdateName" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateName"></a>

```typescript
public readonly serviceUpdateName: string;
```

- *Type:* string

---

##### `serviceUpdateSeverity`<sup>Required</sup> <a name="serviceUpdateSeverity" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateSeverity"></a>

```typescript
public readonly serviceUpdateSeverity: string;
```

- *Type:* string

---

##### `serviceUpdateStatus`<sup>Required</sup> <a name="serviceUpdateStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateStatus"></a>

```typescript
public readonly serviceUpdateStatus: string;
```

- *Type:* string

---

##### `serviceUpdateType`<sup>Required</sup> <a name="serviceUpdateType" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.serviceUpdateType"></a>

```typescript
public readonly serviceUpdateType: string;
```

- *Type:* string

---

##### `updateActionStatus`<sup>Required</sup> <a name="updateActionStatus" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.updateActionStatus"></a>

```typescript
public readonly updateActionStatus: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticacheServiceUpdateActionsUpdateActions;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsElasticacheServiceUpdateActions.DataAwsElasticacheServiceUpdateActionsUpdateActions">DataAwsElasticacheServiceUpdateActionsUpdateActions</a>

---



