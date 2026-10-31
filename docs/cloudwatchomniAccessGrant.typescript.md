# `cloudwatchomniAccessGrant` Submodule <a name="`cloudwatchomniAccessGrant` Submodule" id="@cdktn/provider-aws.cloudwatchomniAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniAccessGrant <a name="CloudwatchomniAccessGrant" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant aws_cloudwatchomni_access_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrant(scope: Construct, id: string, config: CloudwatchomniAccessGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig">CloudwatchomniAccessGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig">CloudwatchomniAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putScopedAction">putScopedAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetScopedAction">resetScopedAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putPrincipal"></a>

```typescript
public putPrincipal(value: IResolvable | CloudwatchomniAccessGrantPrincipal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a>[]

---

##### `putScopedAction` <a name="putScopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putScopedAction"></a>

```typescript
public putScopedAction(value: IResolvable | CloudwatchomniAccessGrantScopedAction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.putScopedAction.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a>[]

---

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScopedAction` <a name="resetScopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetScopedAction"></a>

```typescript
public resetScopedAction(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniAccessGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isConstruct"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformElement"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformResource"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchomniAccessGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchomniAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchomniAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.grantId">grantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList">CloudwatchomniAccessGrantPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.scopedAction">scopedAction</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList">CloudwatchomniAccessGrantScopedActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.scopedActionInput">scopedActionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.spaceIdInput">spaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.spaceId">spaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.principal"></a>

```typescript
public readonly principal: CloudwatchomniAccessGrantPrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList">CloudwatchomniAccessGrantPrincipalList</a>

---

##### `scopedAction`<sup>Required</sup> <a name="scopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.scopedAction"></a>

```typescript
public readonly scopedAction: CloudwatchomniAccessGrantScopedActionList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList">CloudwatchomniAccessGrantScopedActionList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | CloudwatchomniAccessGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scopedActionInput`<sup>Optional</sup> <a name="scopedActionInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.scopedActionInput"></a>

```typescript
public readonly scopedActionInput: IResolvable | CloudwatchomniAccessGrantScopedAction[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a>[]

---

##### `spaceIdInput`<sup>Optional</sup> <a name="spaceIdInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.spaceIdInput"></a>

```typescript
public readonly spaceIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniAccessGrantConfig <a name="CloudwatchomniAccessGrantConfig" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniAccessGrantConfig: cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#domain_id CloudwatchomniAccessGrant#domain_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#name CloudwatchomniAccessGrant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#permission CloudwatchomniAccessGrant#permission}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.spaceId">spaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#space_id CloudwatchomniAccessGrant#space_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.principal">principal</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.scopedAction">scopedAction</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a>[]</code> | scoped_action block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#domain_id CloudwatchomniAccessGrant#domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#name CloudwatchomniAccessGrant#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#permission CloudwatchomniAccessGrant#permission}.

---

##### `spaceId`<sup>Required</sup> <a name="spaceId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.spaceId"></a>

```typescript
public readonly spaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#space_id CloudwatchomniAccessGrant#space_id}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.principal"></a>

```typescript
public readonly principal: IResolvable | CloudwatchomniAccessGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal CloudwatchomniAccessGrant#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#region CloudwatchomniAccessGrant#region}

---

##### `scopedAction`<sup>Optional</sup> <a name="scopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.scopedAction"></a>

```typescript
public readonly scopedAction: IResolvable | CloudwatchomniAccessGrantScopedAction[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a>[]

scoped_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#scoped_action CloudwatchomniAccessGrant#scoped_action}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}.

---

### CloudwatchomniAccessGrantPrincipal <a name="CloudwatchomniAccessGrantPrincipal" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniAccessGrantPrincipal: cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_type CloudwatchomniAccessGrant#principal_type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalAttribute">principalAttribute</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a>[]</code> | principal_attribute block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalId">principalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_id CloudwatchomniAccessGrant#principal_id}. |

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_type CloudwatchomniAccessGrant#principal_type}.

---

##### `principalAttribute`<sup>Optional</sup> <a name="principalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalAttribute"></a>

```typescript
public readonly principalAttribute: IResolvable | CloudwatchomniAccessGrantPrincipalPrincipalAttribute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a>[]

principal_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_attribute CloudwatchomniAccessGrant#principal_attribute}

---

##### `principalId`<sup>Optional</sup> <a name="principalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#principal_id CloudwatchomniAccessGrant#principal_id}.

---

### CloudwatchomniAccessGrantPrincipalPrincipalAttribute <a name="CloudwatchomniAccessGrantPrincipalPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniAccessGrantPrincipalPrincipalAttribute: cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#key CloudwatchomniAccessGrant#key}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#value CloudwatchomniAccessGrant#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#key CloudwatchomniAccessGrant#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#value CloudwatchomniAccessGrant#value}.

---

### CloudwatchomniAccessGrantScopedAction <a name="CloudwatchomniAccessGrantScopedAction" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniAccessGrantScopedAction: cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.property.actions">actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#actions CloudwatchomniAccessGrant#actions}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.property.resource">resource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a>[]</code> | resource block. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#actions CloudwatchomniAccessGrant#actions}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction.property.resource"></a>

```typescript
public readonly resource: IResolvable | CloudwatchomniAccessGrantScopedActionResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a>[]

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource CloudwatchomniAccessGrant#resource}

---

### CloudwatchomniAccessGrantScopedActionResource <a name="CloudwatchomniAccessGrantScopedActionResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniAccessGrantScopedActionResource: cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_type CloudwatchomniAccessGrant#resource_type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_arns CloudwatchomniAccessGrant#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.rowScopeGroup">rowScopeGroup</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a>[]</code> | row_scope_group block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.signalTypes">signalTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#signal_types CloudwatchomniAccessGrant#signal_types}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_type CloudwatchomniAccessGrant#resource_type}.

---

##### `resourceArns`<sup>Optional</sup> <a name="resourceArns" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#resource_arns CloudwatchomniAccessGrant#resource_arns}.

---

##### `rowScopeGroup`<sup>Optional</sup> <a name="rowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.rowScopeGroup"></a>

```typescript
public readonly rowScopeGroup: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a>[]

row_scope_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#row_scope_group CloudwatchomniAccessGrant#row_scope_group}

---

##### `signalTypes`<sup>Optional</sup> <a name="signalTypes" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.signalTypes"></a>

```typescript
public readonly signalTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#signal_types CloudwatchomniAccessGrant#signal_types}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#tags CloudwatchomniAccessGrant#tags}.

---

### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniAccessGrantScopedActionResourceRowScopeGroup: cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup.property.rowScope">rowScope</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a>[]</code> | row_scope block. |

---

##### `rowScope`<sup>Optional</sup> <a name="rowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup.property.rowScope"></a>

```typescript
public readonly rowScope: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a>[]

row_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#row_scope CloudwatchomniAccessGrant#row_scope}

---

### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope: cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.field">field</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#field CloudwatchomniAccessGrant#field}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.operator">operator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#operator CloudwatchomniAccessGrant#operator}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#values CloudwatchomniAccessGrant#values}. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#field CloudwatchomniAccessGrant#field}.

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#operator CloudwatchomniAccessGrant#operator}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/cloudwatchomni_access_grant#values CloudwatchomniAccessGrant#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniAccessGrantPrincipalList <a name="CloudwatchomniAccessGrantPrincipalList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.get"></a>

```typescript
public get(index: number): CloudwatchomniAccessGrantPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a>[]

---


### CloudwatchomniAccessGrantPrincipalOutputReference <a name="CloudwatchomniAccessGrantPrincipalOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.putPrincipalAttribute">putPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resetPrincipalAttribute">resetPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resetPrincipalId">resetPrincipalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipalAttribute` <a name="putPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.putPrincipalAttribute"></a>

```typescript
public putPrincipalAttribute(value: IResolvable | CloudwatchomniAccessGrantPrincipalPrincipalAttribute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.putPrincipalAttribute.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a>[]

---

##### `resetPrincipalAttribute` <a name="resetPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resetPrincipalAttribute"></a>

```typescript
public resetPrincipalAttribute(): void
```

##### `resetPrincipalId` <a name="resetPrincipalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.resetPrincipalId"></a>

```typescript
public resetPrincipalId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalAttribute">principalAttribute</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniAccessGrantPrincipalPrincipalAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalAttributeInput">principalAttributeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalAttribute`<sup>Required</sup> <a name="principalAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalAttribute"></a>

```typescript
public readonly principalAttribute: CloudwatchomniAccessGrantPrincipalPrincipalAttributeList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniAccessGrantPrincipalPrincipalAttributeList</a>

---

##### `principalAttributeInput`<sup>Optional</sup> <a name="principalAttributeInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalAttributeInput"></a>

```typescript
public readonly principalAttributeInput: IResolvable | CloudwatchomniAccessGrantPrincipalPrincipalAttribute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a>[]

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipal">CloudwatchomniAccessGrantPrincipal</a>

---


### CloudwatchomniAccessGrantPrincipalPrincipalAttributeList <a name="CloudwatchomniAccessGrantPrincipalPrincipalAttributeList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.get"></a>

```typescript
public get(index: number): CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantPrincipalPrincipalAttribute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a>[]

---


### CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference <a name="CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantPrincipalPrincipalAttribute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantPrincipalPrincipalAttribute">CloudwatchomniAccessGrantPrincipalPrincipalAttribute</a>

---


### CloudwatchomniAccessGrantScopedActionList <a name="CloudwatchomniAccessGrantScopedActionList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.get"></a>

```typescript
public get(index: number): CloudwatchomniAccessGrantScopedActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantScopedAction[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a>[]

---


### CloudwatchomniAccessGrantScopedActionOutputReference <a name="CloudwatchomniAccessGrantScopedActionOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResource` <a name="putResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.putResource"></a>

```typescript
public putResource(value: IResolvable | CloudwatchomniAccessGrantScopedActionResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.putResource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a>[]

---

##### `resetResource` <a name="resetResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList">CloudwatchomniAccessGrantScopedActionResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.resourceInput">resourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.resource"></a>

```typescript
public readonly resource: CloudwatchomniAccessGrantScopedActionResourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList">CloudwatchomniAccessGrantScopedActionResourceList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: IResolvable | CloudwatchomniAccessGrantScopedActionResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a>[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantScopedAction;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedAction">CloudwatchomniAccessGrantScopedAction</a>

---


### CloudwatchomniAccessGrantScopedActionResourceList <a name="CloudwatchomniAccessGrantScopedActionResourceList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.get"></a>

```typescript
public get(index: number): CloudwatchomniAccessGrantScopedActionResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantScopedActionResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a>[]

---


### CloudwatchomniAccessGrantScopedActionResourceOutputReference <a name="CloudwatchomniAccessGrantScopedActionResourceOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.putRowScopeGroup">putRowScopeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetResourceArns">resetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetRowScopeGroup">resetRowScopeGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetSignalTypes">resetSignalTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRowScopeGroup` <a name="putRowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.putRowScopeGroup"></a>

```typescript
public putRowScopeGroup(value: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.putRowScopeGroup.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a>[]

---

##### `resetResourceArns` <a name="resetResourceArns" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetResourceArns"></a>

```typescript
public resetResourceArns(): void
```

##### `resetRowScopeGroup` <a name="resetRowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetRowScopeGroup"></a>

```typescript
public resetRowScopeGroup(): void
```

##### `resetSignalTypes` <a name="resetSignalTypes" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetSignalTypes"></a>

```typescript
public resetSignalTypes(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.rowScopeGroup">rowScopeGroup</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceArnsInput">resourceArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.rowScopeGroupInput">rowScopeGroupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.signalTypesInput">signalTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceArns">resourceArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.signalTypes">signalTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rowScopeGroup`<sup>Required</sup> <a name="rowScopeGroup" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.rowScopeGroup"></a>

```typescript
public readonly rowScopeGroup: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList</a>

---

##### `resourceArnsInput`<sup>Optional</sup> <a name="resourceArnsInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceArnsInput"></a>

```typescript
public readonly resourceArnsInput: string[];
```

- *Type:* string[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `rowScopeGroupInput`<sup>Optional</sup> <a name="rowScopeGroupInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.rowScopeGroupInput"></a>

```typescript
public readonly rowScopeGroupInput: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a>[]

---

##### `signalTypesInput`<sup>Optional</sup> <a name="signalTypesInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.signalTypesInput"></a>

```typescript
public readonly signalTypesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceArns`<sup>Required</sup> <a name="resourceArns" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceArns"></a>

```typescript
public readonly resourceArns: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `signalTypes`<sup>Required</sup> <a name="signalTypes" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.signalTypes"></a>

```typescript
public readonly signalTypes: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantScopedActionResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResource">CloudwatchomniAccessGrantScopedActionResource</a>

---


### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.get"></a>

```typescript
public get(index: number): CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a>[]

---


### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.putRowScope">putRowScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resetRowScope">resetRowScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRowScope` <a name="putRowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.putRowScope"></a>

```typescript
public putRowScope(value: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.putRowScope.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a>[]

---

##### `resetRowScope` <a name="resetRowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.resetRowScope"></a>

```typescript
public resetRowScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.rowScope">rowScope</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.rowScopeInput">rowScopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rowScope`<sup>Required</sup> <a name="rowScope" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.rowScope"></a>

```typescript
public readonly rowScope: CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList</a>

---

##### `rowScopeInput`<sup>Optional</sup> <a name="rowScopeInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.rowScopeInput"></a>

```typescript
public readonly rowScopeInput: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroup</a>

---


### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.get"></a>

```typescript
public get(index: number): CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a>[]

---


### CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference <a name="CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.operatorInput">operatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.operatorInput"></a>

```typescript
public readonly operatorInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniAccessGrant.CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope">CloudwatchomniAccessGrantScopedActionResourceRowScopeGroupRowScope</a>

---



