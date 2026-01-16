# `cloudfrontConnectionFunction` Submodule <a name="`cloudfrontConnectionFunction` Submodule" id="@cdktn/provider-aws.cloudfrontConnectionFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontConnectionFunction <a name="CloudfrontConnectionFunction" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function aws_cloudfront_connection_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

new cloudfrontConnectionFunction.CloudfrontConnectionFunction(scope: Construct, id: string, config: CloudfrontConnectionFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig">CloudfrontConnectionFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig">CloudfrontConnectionFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig">putConnectionFunctionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetConnectionFunctionConfig">resetConnectionFunctionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetPublish">resetPublish</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectionFunctionConfig` <a name="putConnectionFunctionConfig" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig"></a>

```typescript
public putConnectionFunctionConfig(value: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.putConnectionFunctionConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>[]

---

##### `resetConnectionFunctionConfig` <a name="resetConnectionFunctionConfig" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetConnectionFunctionConfig"></a>

```typescript
public resetConnectionFunctionConfig(): void
```

##### `resetPublish` <a name="resetPublish" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetPublish"></a>

```typescript
public resetPublish(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontConnectionFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudfrontConnectionFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontConnectionFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontConnectionFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontConnectionFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionArn">connectionFunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfig">connectionFunctionConfig</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList">CloudfrontConnectionFunctionConnectionFunctionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.liveStageEtag">liveStageEtag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCodeInput">connectionFunctionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfigInput">connectionFunctionConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.publishInput">publishInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCode">connectionFunctionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.publish">publish</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionFunctionArn`<sup>Required</sup> <a name="connectionFunctionArn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionArn"></a>

```typescript
public readonly connectionFunctionArn: string;
```

- *Type:* string

---

##### `connectionFunctionConfig`<sup>Required</sup> <a name="connectionFunctionConfig" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfig"></a>

```typescript
public readonly connectionFunctionConfig: CloudfrontConnectionFunctionConnectionFunctionConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList">CloudfrontConnectionFunctionConnectionFunctionConfigList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `liveStageEtag`<sup>Required</sup> <a name="liveStageEtag" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.liveStageEtag"></a>

```typescript
public readonly liveStageEtag: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `connectionFunctionCodeInput`<sup>Optional</sup> <a name="connectionFunctionCodeInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCodeInput"></a>

```typescript
public readonly connectionFunctionCodeInput: string;
```

- *Type:* string

---

##### `connectionFunctionConfigInput`<sup>Optional</sup> <a name="connectionFunctionConfigInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionConfigInput"></a>

```typescript
public readonly connectionFunctionConfigInput: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `publishInput`<sup>Optional</sup> <a name="publishInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.publishInput"></a>

```typescript
public readonly publishInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionFunctionCode`<sup>Required</sup> <a name="connectionFunctionCode" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.connectionFunctionCode"></a>

```typescript
public readonly connectionFunctionCode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publish`<sup>Required</sup> <a name="publish" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.publish"></a>

```typescript
public readonly publish: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontConnectionFunctionConfig <a name="CloudfrontConnectionFunctionConfig" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.Initializer"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

const cloudfrontConnectionFunctionConfig: cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionCode">connectionFunctionCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#connection_function_code CloudfrontConnectionFunction#connection_function_code}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#name CloudfrontConnectionFunction#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionConfig">connectionFunctionConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>[]</code> | connection_function_config block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.publish">publish</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#publish CloudfrontConnectionFunction#publish}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#tags CloudfrontConnectionFunction#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionFunctionCode`<sup>Required</sup> <a name="connectionFunctionCode" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionCode"></a>

```typescript
public readonly connectionFunctionCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#connection_function_code CloudfrontConnectionFunction#connection_function_code}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#name CloudfrontConnectionFunction#name}.

---

##### `connectionFunctionConfig`<sup>Optional</sup> <a name="connectionFunctionConfig" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.connectionFunctionConfig"></a>

```typescript
public readonly connectionFunctionConfig: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>[]

connection_function_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#connection_function_config CloudfrontConnectionFunction#connection_function_config}

---

##### `publish`<sup>Optional</sup> <a name="publish" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.publish"></a>

```typescript
public readonly publish: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#publish CloudfrontConnectionFunction#publish}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#tags CloudfrontConnectionFunction#tags}.

---

### CloudfrontConnectionFunctionConnectionFunctionConfig <a name="CloudfrontConnectionFunctionConnectionFunctionConfig" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.Initializer"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

const cloudfrontConnectionFunctionConnectionFunctionConfig: cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#comment CloudfrontConnectionFunction#comment}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.runtime">runtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#runtime CloudfrontConnectionFunction#runtime}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.keyValueStoreAssociation">keyValueStoreAssociation</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a>[]</code> | key_value_store_association block. |

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#comment CloudfrontConnectionFunction#comment}.

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#runtime CloudfrontConnectionFunction#runtime}.

---

##### `keyValueStoreAssociation`<sup>Optional</sup> <a name="keyValueStoreAssociation" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig.property.keyValueStoreAssociation"></a>

```typescript
public readonly keyValueStoreAssociation: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a>[]

key_value_store_association block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#key_value_store_association CloudfrontConnectionFunction#key_value_store_association}

---

### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation.Initializer"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

const cloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation: cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#key_value_store_arn CloudfrontConnectionFunction#key_value_store_arn}. |

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation.property.keyValueStoreArn"></a>

```typescript
public readonly keyValueStoreArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_connection_function#key_value_store_arn CloudfrontConnectionFunction#key_value_store_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.Initializer"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

new cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.get"></a>

```typescript
public get(index: number): CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a>[]

---


### CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference <a name="CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

new cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.keyValueStoreArnInput">keyValueStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.keyValueStoreArn">keyValueStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyValueStoreArnInput`<sup>Optional</sup> <a name="keyValueStoreArnInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.keyValueStoreArnInput"></a>

```typescript
public readonly keyValueStoreArnInput: string;
```

- *Type:* string

---

##### `keyValueStoreArn`<sup>Required</sup> <a name="keyValueStoreArn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.keyValueStoreArn"></a>

```typescript
public readonly keyValueStoreArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a>

---


### CloudfrontConnectionFunctionConnectionFunctionConfigList <a name="CloudfrontConnectionFunctionConnectionFunctionConfigList" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.Initializer"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

new cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.get"></a>

```typescript
public get(index: number): CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>[]

---


### CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference <a name="CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer"></a>

```typescript
import { cloudfrontConnectionFunction } from '@cdktn/provider-aws'

new cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociation">putKeyValueStoreAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resetKeyValueStoreAssociation">resetKeyValueStoreAssociation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeyValueStoreAssociation` <a name="putKeyValueStoreAssociation" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociation"></a>

```typescript
public putKeyValueStoreAssociation(value: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.putKeyValueStoreAssociation.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a>[]

---

##### `resetKeyValueStoreAssociation` <a name="resetKeyValueStoreAssociation" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.resetKeyValueStoreAssociation"></a>

```typescript
public resetKeyValueStoreAssociation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociation">keyValueStoreAssociation</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociationInput">keyValueStoreAssociationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyValueStoreAssociation`<sup>Required</sup> <a name="keyValueStoreAssociation" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociation"></a>

```typescript
public readonly keyValueStoreAssociation: CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociationList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `keyValueStoreAssociationInput`<sup>Optional</sup> <a name="keyValueStoreAssociationInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.keyValueStoreAssociationInput"></a>

```typescript
public readonly keyValueStoreAssociationInput: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation">CloudfrontConnectionFunctionConnectionFunctionConfigKeyValueStoreAssociation</a>[]

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontConnectionFunctionConnectionFunctionConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontConnectionFunction.CloudfrontConnectionFunctionConnectionFunctionConfig">CloudfrontConnectionFunctionConnectionFunctionConfig</a>

---



