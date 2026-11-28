# `cloudwatchomniOrganizationAccessGrant` Submodule <a name="`cloudwatchomniOrganizationAccessGrant` Submodule" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchomniOrganizationAccessGrant <a name="CloudwatchomniOrganizationAccessGrant" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant aws_cloudwatchomni_organization_access_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant(scope: Construct, id: string, config: CloudwatchomniOrganizationAccessGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig">CloudwatchomniOrganizationAccessGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig">CloudwatchomniOrganizationAccessGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal"></a>

```typescript
public putPrincipal(value: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]

---

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchomniOrganizationAccessGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchomniOrganizationAccessGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchomniOrganizationAccessGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchomniOrganizationAccessGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchomniOrganizationAccessGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantId">grantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantType">grantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList">CloudwatchomniOrganizationAccessGrantPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

---

##### `grantType`<sup>Required</sup> <a name="grantType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.grantType"></a>

```typescript
public readonly grantType: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principal"></a>

```typescript
public readonly principal: CloudwatchomniOrganizationAccessGrantPrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList">CloudwatchomniOrganizationAccessGrantPrincipalList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchomniOrganizationAccessGrantConfig <a name="CloudwatchomniOrganizationAccessGrantConfig" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniOrganizationAccessGrantConfig: cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.permission">permission</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.principal">principal</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#domain_id CloudwatchomniOrganizationAccessGrant#domain_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#name CloudwatchomniOrganizationAccessGrant#name}.

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#permission CloudwatchomniOrganizationAccessGrant#permission}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.principal"></a>

```typescript
public readonly principal: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal CloudwatchomniOrganizationAccessGrant#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#region CloudwatchomniOrganizationAccessGrant#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#tags CloudwatchomniOrganizationAccessGrant#tags}.

---

### CloudwatchomniOrganizationAccessGrantPrincipal <a name="CloudwatchomniOrganizationAccessGrantPrincipal" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniOrganizationAccessGrantPrincipal: cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalType">principalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_type CloudwatchomniOrganizationAccessGrant#principal_type}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalAttribute">principalAttribute</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]</code> | principal_attribute block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalId">principalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_id CloudwatchomniOrganizationAccessGrant#principal_id}. |

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_type CloudwatchomniOrganizationAccessGrant#principal_type}.

---

##### `principalAttribute`<sup>Optional</sup> <a name="principalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalAttribute"></a>

```typescript
public readonly principalAttribute: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]

principal_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_attribute CloudwatchomniOrganizationAccessGrant#principal_attribute}

---

##### `principalId`<sup>Optional</sup> <a name="principalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#principal_id CloudwatchomniOrganizationAccessGrant#principal_id}.

---

### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

const cloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute: cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#key CloudwatchomniOrganizationAccessGrant#key}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#value CloudwatchomniOrganizationAccessGrant#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#key CloudwatchomniOrganizationAccessGrant#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.74.0/docs/resources/cloudwatchomni_organization_access_grant#value CloudwatchomniOrganizationAccessGrant#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchomniOrganizationAccessGrantPrincipalList <a name="CloudwatchomniOrganizationAccessGrantPrincipalList" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get"></a>

```typescript
public get(index: number): CloudwatchomniOrganizationAccessGrantPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>[]

---


### CloudwatchomniOrganizationAccessGrantPrincipalOutputReference <a name="CloudwatchomniOrganizationAccessGrantPrincipalOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute">putPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalAttribute">resetPrincipalAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalId">resetPrincipalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipalAttribute` <a name="putPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute"></a>

```typescript
public putPrincipalAttribute(value: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.putPrincipalAttribute.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]

---

##### `resetPrincipalAttribute` <a name="resetPrincipalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalAttribute"></a>

```typescript
public resetPrincipalAttribute(): void
```

##### `resetPrincipalId` <a name="resetPrincipalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.resetPrincipalId"></a>

```typescript
public resetPrincipalId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttribute">principalAttribute</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttributeInput">principalAttributeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalIdInput">principalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalTypeInput">principalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalType">principalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalAttribute`<sup>Required</sup> <a name="principalAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttribute"></a>

```typescript
public readonly principalAttribute: CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList</a>

---

##### `principalAttributeInput`<sup>Optional</sup> <a name="principalAttributeInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalAttributeInput"></a>

```typescript
public readonly principalAttributeInput: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalIdInput"></a>

```typescript
public readonly principalIdInput: string;
```

- *Type:* string

---

##### `principalTypeInput`<sup>Optional</sup> <a name="principalTypeInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalTypeInput"></a>

```typescript
public readonly principalTypeInput: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.principalType"></a>

```typescript
public readonly principalType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipal">CloudwatchomniOrganizationAccessGrantPrincipal</a>

---


### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get"></a>

```typescript
public get(index: number): CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>[]

---


### CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference <a name="CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer"></a>

```typescript
import { cloudwatchomniOrganizationAccessGrant } from '@cdktn/provider-aws'

new cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchomniOrganizationAccessGrant.CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute">CloudwatchomniOrganizationAccessGrantPrincipalPrincipalAttribute</a>

---



