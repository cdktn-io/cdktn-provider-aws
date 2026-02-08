# `cloudfrontAnycastIpList` Submodule <a name="`cloudfrontAnycastIpList` Submodule" id="@cdktn/provider-aws.cloudfrontAnycastIpList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontAnycastIpList <a name="CloudfrontAnycastIpList" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list aws_cloudfront_anycast_ip_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer"></a>

```typescript
import { cloudfrontAnycastIpList } from '@cdktn/provider-aws'

new cloudfrontAnycastIpList.CloudfrontAnycastIpList(scope: Construct, id: string, config: CloudfrontAnycastIpListConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig">CloudfrontAnycastIpListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig">CloudfrontAnycastIpListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudfrontAnycastIpListTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontAnycastIpList resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isConstruct"></a>

```typescript
import { cloudfrontAnycastIpList } from '@cdktn/provider-aws'

cloudfrontAnycastIpList.CloudfrontAnycastIpList.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformElement"></a>

```typescript
import { cloudfrontAnycastIpList } from '@cdktn/provider-aws'

cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformResource"></a>

```typescript
import { cloudfrontAnycastIpList } from '@cdktn/provider-aws'

cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport"></a>

```typescript
import { cloudfrontAnycastIpList } from '@cdktn/provider-aws'

cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudfrontAnycastIpList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontAnycastIpList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontAnycastIpList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontAnycastIpList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.anycastIps">anycastIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference">CloudfrontAnycastIpListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.ipCountInput">ipCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.ipCount">ipCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `anycastIps`<sup>Required</sup> <a name="anycastIps" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.anycastIps"></a>

```typescript
public readonly anycastIps: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.timeouts"></a>

```typescript
public readonly timeouts: CloudfrontAnycastIpListTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference">CloudfrontAnycastIpListTimeoutsOutputReference</a>

---

##### `ipCountInput`<sup>Optional</sup> <a name="ipCountInput" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.ipCountInput"></a>

```typescript
public readonly ipCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudfrontAnycastIpListTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a>

---

##### `ipCount`<sup>Required</sup> <a name="ipCount" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.ipCount"></a>

```typescript
public readonly ipCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpList.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontAnycastIpListConfig <a name="CloudfrontAnycastIpListConfig" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.Initializer"></a>

```typescript
import { cloudfrontAnycastIpList } from '@cdktn/provider-aws'

const cloudfrontAnycastIpListConfig: cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.ipCount">ipCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#ip_count CloudfrontAnycastIpList#ip_count}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#name CloudfrontAnycastIpList#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#tags CloudfrontAnycastIpList#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipCount`<sup>Required</sup> <a name="ipCount" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.ipCount"></a>

```typescript
public readonly ipCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#ip_count CloudfrontAnycastIpList#ip_count}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#name CloudfrontAnycastIpList#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#tags CloudfrontAnycastIpList#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudfrontAnycastIpListTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#timeouts CloudfrontAnycastIpList#timeouts}

---

### CloudfrontAnycastIpListTimeouts <a name="CloudfrontAnycastIpListTimeouts" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts.Initializer"></a>

```typescript
import { cloudfrontAnycastIpList } from '@cdktn/provider-aws'

const cloudfrontAnycastIpListTimeouts: cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/cloudfront_anycast_ip_list#create CloudfrontAnycastIpList#create}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontAnycastIpListTimeoutsOutputReference <a name="CloudfrontAnycastIpListTimeoutsOutputReference" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudfrontAnycastIpList } from '@cdktn/provider-aws'

new cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontAnycastIpListTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontAnycastIpList.CloudfrontAnycastIpListTimeouts">CloudfrontAnycastIpListTimeouts</a>

---



