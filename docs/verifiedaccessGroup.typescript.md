# `verifiedaccessGroup` Submodule <a name="`verifiedaccessGroup` Submodule" id="@cdktn/provider-aws.verifiedaccessGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessGroup <a name="VerifiedaccessGroup" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group aws_verifiedaccess_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.Initializer"></a>

```typescript
import { verifiedaccessGroup } from '@cdktn/provider-aws'

new verifiedaccessGroup.VerifiedaccessGroup(scope: Construct, id: string, config: VerifiedaccessGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig">VerifiedaccessGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig">VerifiedaccessGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.putSseConfiguration">putSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetSseConfiguration">resetSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSseConfiguration` <a name="putSseConfiguration" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.putSseConfiguration"></a>

```typescript
public putSseConfiguration(value: VerifiedaccessGroupSseConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.putSseConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration">VerifiedaccessGroupSseConfiguration</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetPolicyDocument"></a>

```typescript
public resetPolicyDocument(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSseConfiguration` <a name="resetSseConfiguration" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetSseConfiguration"></a>

```typescript
public resetSseConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VerifiedaccessGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isConstruct"></a>

```typescript
import { verifiedaccessGroup } from '@cdktn/provider-aws'

verifiedaccessGroup.VerifiedaccessGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isTerraformElement"></a>

```typescript
import { verifiedaccessGroup } from '@cdktn/provider-aws'

verifiedaccessGroup.VerifiedaccessGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isTerraformResource"></a>

```typescript
import { verifiedaccessGroup } from '@cdktn/provider-aws'

verifiedaccessGroup.VerifiedaccessGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.generateConfigForImport"></a>

```typescript
import { verifiedaccessGroup } from '@cdktn/provider-aws'

verifiedaccessGroup.VerifiedaccessGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VerifiedaccessGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VerifiedaccessGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VerifiedaccessGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.deletionTime">deletionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.sseConfiguration">sseConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference">VerifiedaccessGroupSseConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.verifiedaccessGroupArn">verifiedaccessGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.verifiedaccessGroupId">verifiedaccessGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.policyDocumentInput">policyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.sseConfigurationInput">sseConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration">VerifiedaccessGroupSseConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.verifiedaccessInstanceIdInput">verifiedaccessInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.policyDocument">policyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.verifiedaccessInstanceId">verifiedaccessInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `deletionTime`<sup>Required</sup> <a name="deletionTime" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.deletionTime"></a>

```typescript
public readonly deletionTime: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `sseConfiguration`<sup>Required</sup> <a name="sseConfiguration" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.sseConfiguration"></a>

```typescript
public readonly sseConfiguration: VerifiedaccessGroupSseConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference">VerifiedaccessGroupSseConfigurationOutputReference</a>

---

##### `verifiedaccessGroupArn`<sup>Required</sup> <a name="verifiedaccessGroupArn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.verifiedaccessGroupArn"></a>

```typescript
public readonly verifiedaccessGroupArn: string;
```

- *Type:* string

---

##### `verifiedaccessGroupId`<sup>Required</sup> <a name="verifiedaccessGroupId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.verifiedaccessGroupId"></a>

```typescript
public readonly verifiedaccessGroupId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.policyDocumentInput"></a>

```typescript
public readonly policyDocumentInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sseConfigurationInput`<sup>Optional</sup> <a name="sseConfigurationInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.sseConfigurationInput"></a>

```typescript
public readonly sseConfigurationInput: VerifiedaccessGroupSseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration">VerifiedaccessGroupSseConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `verifiedaccessInstanceIdInput`<sup>Optional</sup> <a name="verifiedaccessInstanceIdInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.verifiedaccessInstanceIdInput"></a>

```typescript
public readonly verifiedaccessInstanceIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `verifiedaccessInstanceId`<sup>Required</sup> <a name="verifiedaccessInstanceId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.verifiedaccessInstanceId"></a>

```typescript
public readonly verifiedaccessInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessGroupConfig <a name="VerifiedaccessGroupConfig" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.Initializer"></a>

```typescript
import { verifiedaccessGroup } from '@cdktn/provider-aws'

const verifiedaccessGroupConfig: verifiedaccessGroup.VerifiedaccessGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.verifiedaccessInstanceId">verifiedaccessInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#verifiedaccess_instance_id VerifiedaccessGroup#verifiedaccess_instance_id}. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#description VerifiedaccessGroup#description}. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#id VerifiedaccessGroup#id}. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.policyDocument">policyDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#policy_document VerifiedaccessGroup#policy_document}. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.sseConfiguration">sseConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration">VerifiedaccessGroupSseConfiguration</a></code> | sse_configuration block. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#tags VerifiedaccessGroup#tags}. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#tags_all VerifiedaccessGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `verifiedaccessInstanceId`<sup>Required</sup> <a name="verifiedaccessInstanceId" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.verifiedaccessInstanceId"></a>

```typescript
public readonly verifiedaccessInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#verifiedaccess_instance_id VerifiedaccessGroup#verifiedaccess_instance_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#description VerifiedaccessGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#id VerifiedaccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.policyDocument"></a>

```typescript
public readonly policyDocument: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#policy_document VerifiedaccessGroup#policy_document}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#region VerifiedaccessGroup#region}

---

##### `sseConfiguration`<sup>Optional</sup> <a name="sseConfiguration" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.sseConfiguration"></a>

```typescript
public readonly sseConfiguration: VerifiedaccessGroupSseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration">VerifiedaccessGroupSseConfiguration</a>

sse_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#sse_configuration VerifiedaccessGroup#sse_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#tags VerifiedaccessGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#tags_all VerifiedaccessGroup#tags_all}.

---

### VerifiedaccessGroupSseConfiguration <a name="VerifiedaccessGroupSseConfiguration" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration.Initializer"></a>

```typescript
import { verifiedaccessGroup } from '@cdktn/provider-aws'

const verifiedaccessGroupSseConfiguration: verifiedaccessGroup.VerifiedaccessGroupSseConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#customer_managed_key_enabled VerifiedaccessGroup#customer_managed_key_enabled}. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#kms_key_arn VerifiedaccessGroup#kms_key_arn}. |

---

##### `customerManagedKeyEnabled`<sup>Optional</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#customer_managed_key_enabled VerifiedaccessGroup#customer_managed_key_enabled}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/verifiedaccess_group#kms_key_arn VerifiedaccessGroup#kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessGroupSseConfigurationOutputReference <a name="VerifiedaccessGroupSseConfigurationOutputReference" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.Initializer"></a>

```typescript
import { verifiedaccessGroup } from '@cdktn/provider-aws'

new verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.resetCustomerManagedKeyEnabled">resetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomerManagedKeyEnabled` <a name="resetCustomerManagedKeyEnabled" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.resetCustomerManagedKeyEnabled"></a>

```typescript
public resetCustomerManagedKeyEnabled(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.customerManagedKeyEnabledInput">customerManagedKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.customerManagedKeyEnabled">customerManagedKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration">VerifiedaccessGroupSseConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabledInput`<sup>Optional</sup> <a name="customerManagedKeyEnabledInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.customerManagedKeyEnabledInput"></a>

```typescript
public readonly customerManagedKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `customerManagedKeyEnabled`<sup>Required</sup> <a name="customerManagedKeyEnabled" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.customerManagedKeyEnabled"></a>

```typescript
public readonly customerManagedKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VerifiedaccessGroupSseConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.verifiedaccessGroup.VerifiedaccessGroupSseConfiguration">VerifiedaccessGroupSseConfiguration</a>

---



